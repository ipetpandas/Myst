from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    recommended = BooleanField("Recommended")
    review = StringField("StringField", validators=[DataRequired()])
