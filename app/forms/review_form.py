from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    recommended = BooleanField("Recommended", validators=[DataRequired()])
    review = StringField("StringField", validators=[DataRequired()])
