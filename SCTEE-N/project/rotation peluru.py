import turtle as T

# Function to draw a straight line
def draw_line(length):
    T.forward(length)

# Function to draw a semi-circle for the curved part
def draw_semi_circle(radius):
    T.right(90)
    T.circle(radius, 180)

# Function to draw the shape
def draw_shape():
    # Draw the straight line
    draw_line(100)

    # Draw the semi-circle
    draw_semi_circle(50)

# Hide the turtle
T.hideturtle()

# Draw the shapes in a rotating pattern
for i in range(36):
    draw_shape()
    T.penup()
    T.home()
    T.pendown()
    T.right(i * 10)

# End the drawing
T.done()
