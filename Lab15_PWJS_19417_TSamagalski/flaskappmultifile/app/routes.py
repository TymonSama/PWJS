from app import app

from flask import Flask, redirect, url_for, request, abort, render_template
from flask_login import LoginManager, UserMixin,login_required, login_user, logout_user
import sqlite3 as sql

app = Flask(__name__)

app.config.update(
 DEBUG = False,
 SECRET_KEY = 'sekretny_klucz'
)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"

class User(UserMixin):
    def __init__(self, id):
        self.id = id
        self.name = "user" + str(id)
        self.password = self.name + "_secret"

    def __repr__(self):
        return "%d/%s/%s" % (self.id, self.name, self.password)
    
users = [User(id) for id in range(1, 10)]

@app.route("/")
@login_required
def main():
     return render_template('index.html', tytul = 'Strona główna', tresc = 'Witaj na stronie głównej.')

@app.route("/dodaj")
@login_required
def dodaj():
    return render_template('studentadd.html', tytul = 'Dodaj studenta', tresc = 'Dodaj studenta.')

@app.route('/addrec',methods = ['POST', 'GET'])
def addrec():
    if request.method == 'POST':
        try:
            imienazwisko = request.form['imienazwisko']
            nrstudenta = request.form['nrstudenta']
            adres = request.form['adres']
            with sql.connect("database.db") as con:
                cur = con.cursor()
                cur.execute("INSERT INTO studenci (imienazwisko, nrstudenta, adres) VALUES (?, ?, ?)", (imienazwisko, nrstudenta, adres))
                con.commit()
                msg = "Rekord zapisany"
        except:
            msg = "Blad przy dodawaniu rekordu"
        finally:
            return render_template("rezultat.html", tytul = "Rezultat", tresc = msg)
            con.close()

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if password == username + "_secret":
            id = username.split('user')[1]
            user = User(id)
            login_user(user)
            con=sql.connect("database.db")
            cur = con.cursor()
            cur.execute("INSERT INTO studenci (imienazwisko, nrstudenta, adres) VALUES (?, ?, ?)", (username, "brak", "brak"))
            con.commit()
            con.close()
            return redirect(url_for("main"))
        else:
            return abort(401)
    else:
        return render_template('formularz_logowania.html', tytul = 'Zaloguj sie', tresc = 'Zaloguj sie do swojego konta.')
    
@app.errorhandler(401)
def page_not_found(e):
    return render_template('blad.html', tytul = 'Cos poszlo nie tak', blad = '401')

@app.route("/logout")
@login_required
def logout():
    logout_user()
    return render_template('logout.html', tytul = 'Wylogowywanie')

@login_manager.user_loader
def load_user(userid):
    return User(userid)

@app.route("/about")
@login_required
def about_me():
    return render_template('omnie.html', tytul='O mnie')

@app.route("/lista")
def lista():
    con = sql.connect('database.db')
    con.row_factory = sql.Row
    cur = con.cursor()
    cur.execute("SELECT * FROM praacownicy ORDER BY imienazwisko")
    rekordy = cur.fetchall()
    con.close()
    return render_template('lista.html', tytul = 'Lista studentów', tresc = 'Lista studentów', rekordy = rekordy)
    
if __name__ == "__main__":
    app.run()