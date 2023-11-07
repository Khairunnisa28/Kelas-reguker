import turtle as T

# Function to draw a straight line
def draw_line(x1, y1, x2, y2):
    T.penup()
    T.goto(x1, y1)
    T.pendown()
    T.goto(x2, y2)

# Function to draw a semi-circle for the curved part of "P"
def draw_semi_circle(radius):
    T.right(90)
    T.circle(radius, 180)

# Hide the turtle
T.hideturtle()

# Draw the straight part of "P"
draw_line(0, 0, 0, 200)

# Draw the curved part of "P"
T.goto(0, 150)
draw_semi_circle(50)

# End the drawing
T.done()
