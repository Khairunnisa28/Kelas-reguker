import turtle as T

# Function to draw a straight line
def draw_line(x1, y1, x2, y2, x3, y3, x4, y4):
    T.penup()
    T.goto(x1, y1)
    T.goto(x3, y3)
    T.pendown()
    T.goto(x2, y2)
    T.goto(x4, y4)

# Function to draw a semi-circle for the curved part
def draw_semi_circle(radius):
    T.right(40)
    T.circle(radius, 180)

# Hide the turtle
T.hideturtle()

# Draw the square
draw_line(100, 100, 100, 100, 100, 100, 100, 100)
draw_line(100, 100, 100, 100, 100, 100, 100, 100)
draw_line(100, 100, 100, 100, 100, 100, 100, 100)
draw_line(100, 100, 100, 100, 100, 100, 100, 100)

# Draw the curved part of the polygon inside the square
T.goto(60, 60)
draw_semi_circle(50)

# End the drawing
T.done()
