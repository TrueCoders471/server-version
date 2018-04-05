import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './myTestCardCompStyle.css';

const CardExampleWithAvatar = () => (
    <Card>
        <CardHeader

        />
        <CardMedia>
            <img className={"image-class-header"} src = {require ('./../../public/images/testClassImage.jpeg')} alt="" />
        </CardMedia>
        <CardTitle title="ITEC 472" subtitle="Software Engineering III" />
        <CardActions>
            <button className={"commonButton"}>ENTER</button>
        </CardActions>
    </Card>
);

export default CardExampleWithAvatar;