# Impor modul turtle dengan alias T
import turtle as T

# Fungsi untuk menggambar kurva Bezier
def drawCurve(P):
   # Menggambar kurva Bezier sebagai 100 segmen kecil
   T.pu()
   for i in range(101):
      t = i/100
      x = P[0][0]*(1-t)**3 + 3*P[1][0]*t*(1-t)**2 + 3*P[2][0]*t*t*(1-t) + P[3][0]*t**3
      y = P[0][1]*(1-t)**3 + 3*P[1][1]*t*(1-t)**2 + 3*P[2][1]*t*t*(1-t) + P[3][1]*t**3
      T.goto(x, y)
      T.pd()

# Menyembunyikan turtle
T.hideturtle()

# Data uji, empat titik kontrol
# Ubah nilai titik ini untuk melihat bagaimana kurva berubah
P0 = 200, -100
P1 = -100, 0
P2 = 100, 200
P3 = 150, 100

# Menggambar kurva dengan titik kontrol
T.color("blue")
drawCurve([P0, P1, P2, P3])

# Menggambar poligon kontrol
T.color("red")
T.pu()
T.goto(P0)
T.pd()
T.dot(5)
T.goto(P1)
T.dot(5)
T.goto(P2)
T.dot(5)
T.goto(P3)
T.dot(5)
