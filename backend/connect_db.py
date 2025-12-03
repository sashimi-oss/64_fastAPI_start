import psycopg2

conn = psycopg2.connect(
    host="db",
    database="mydb",
    user="user",
    password="password"
)

cur = conn.cursor()
cur.execute("SELECT content FROM tweets")
tweet_content = cur.fetchall()
print(tweet_content)

cur.close()
conn.close()