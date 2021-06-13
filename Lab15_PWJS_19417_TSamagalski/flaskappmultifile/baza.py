import sqlite3

if __name__ == "__main__":

    conn = sqlite3.connect('database.db')
    print("BD otwarta")
    
    conn.execute('CREATE TABLE studenci (imieinazwisko TEXT, nrstudenta TEXT, adres TEXT)')
    print("Tabela utworzona")

    cur = conn.cursor()
    cur.execute("INSERT INTO studenci (imienazwisko, nrstudenta, adres) VALUES (?,?,?)",('Tymon Samagalski','1','Elblag') )
    cur.execute("INSERT INTO studenci (imienazwisko, nrstudenta, adres) VALUES (?,?,?)",('Maciek Tutlewski','2','Targ') )
    conn.commit()
    
    cur.execute('SELECT * FROM studenci')
    print(cur.fetchall())
    
    conn.close()
    print("BD zamknieta")