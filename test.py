import mysql.connector
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Connect to MySQL
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="**********",  # Enter MySQL password if set
    database="gov_scheme"
)
cursor = conn.cursor()

# Fetch User Data (Modify as per your database)
user_query = """
SELECT user_id, name, age, income, occupation, disability_status, location
FROM Users
"""
cursor.execute(user_query)
users_df = pd.DataFrame(cursor.fetchall(), columns=['user_id', 'name', 'age', 'income', 'occupation', 'disability_status', 'location'])

# Fetch Scheme Data
scheme_query = """
SELECT scheme_id, scheme_name, min_age, max_age, min_income, max_income, required_occupation, disability_required, location_specific
FROM Schemes
"""
cursor.execute(scheme_query)
schemes_df = pd.DataFrame(cursor.fetchall(), columns=['scheme_id', 'scheme_name', 'min_age', 'max_age', 'min_income', 'max_income', 'required_occupation', 'disability_required', 'location_specific'])

# Close database connection
cursor.close()
conn.close()

#  Combine scheme criteria into a single text field
schemes_df['criteria'] = (
    schemes_df['min_age'].astype(str) + " " +
    schemes_df['max_age'].astype(str) + " " +
    schemes_df['min_income'].astype(str) + " " +
    schemes_df['max_income'].astype(str) + " " +
    schemes_df['required_occupation'].fillna('') + " " +
    schemes_df['disability_required'].astype(str) + " " +
    schemes_df['location_specific'].fillna('')
)

# Combine user details into a single text field
users_df['profile'] = (
    users_df['age'].astype(str) + " " +
    users_df['income'].astype(str) + " " +
    users_df['occupation'].fillna('') + " " +
    users_df['disability_status'].astype(str) + " " +
    users_df['location'].fillna('')
)

#  TF-IDF Vectorization
vectorizer = TfidfVectorizer(stop_words='english')
user_matrix = vectorizer.fit_transform(users_df['profile'])
scheme_matrix = vectorizer.transform(schemes_df['criteria'])  # Transform scheme data using the same vectorizer

# Compute Cosine Similarity (User-Profile vs. Scheme)
cosine_sim = cosine_similarity(user_matrix, scheme_matrix)

# Recommend Schemes for a Given User
def recommend_schemes(user_index, top_n=5):
    scores = list(enumerate(cosine_sim[user_index]))
    scores = sorted(scores, key=lambda x: x[1], reverse=True)
    top_schemes = scores[:top_n]  # Get top-N recommended schemes
    
    print(f"\n🔍 Top {top_n} Schemes for {users_df.iloc[user_index]['name']} 🔍\n")
    for idx, score in top_schemes:
        print(f"✅ {schemes_df.iloc[idx]['scheme_name']} (Similarity: {score:.2f})")

#  Example: Recommend schemes for the first user
recommend_schemes(0)
