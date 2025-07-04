import sqlite3

conn = sqlite3.connect("spieldaten.sqlite3")
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS zaubertraenke (
    id INTEGER PRIMARY KEY,
    name TEXT,
    farbe TEXT,
    wirkung TEXT
)
""")

cursor.executemany("""
INSERT INTO zaubertraenke (name, farbe, wirkung) VALUES (?, ?, ?)
""", [
    ("Heiltrank", "grün", "stellt HP wieder her"),
    ("Feuertrank", "rot", "fügt Feuerschaden zu"),
    ("Unsichtbarkeitstrank", "blau", "macht unsichtbar"),
])

conn.commit()
conn.close()

print("✓ Datenbank initialisiert.")
