import Data from './data/syllabus.json';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BeltLabel from "./BeltLabel";

const useStyles = makeStyles({
    root: {
        minWidth: 300,
        maxWidth: 300,
        minHeight: 300,
        maxHeight: 300,
        display: "flex",
        flexDirection: "column"
    },
    media: {
        height: 140,
    },
    actions: {
        display: "flex",
        marginTop: "auto"
    }
});

export default function TechniqueCard(props) {
    const classes = useStyles();
    function getThumb(url) {
        var ytl = url;
        var yti = ytl.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
        var thumbUrl = "http://i3.ytimg.com/vi/" + yti[1] + "/hqdefault.jpg";
        return thumbUrl;
    }

    return (
        <div class="techniqueCard">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={getThumb(props.url)}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="subtitle2" component="subtitle2">
                            {props.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.actions}>
                    <BeltLabel beltColor={props.beltColor} />
                </CardActions>
            </Card>
        </div>
    );
}