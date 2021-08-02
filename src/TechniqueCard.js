import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import BeltLabel from "./BeltLabel";

const useStyles = makeStyles({
    root: {
        minWidth: 400,
        maxWidth: 400,
        minHeight: 400,
        maxHeight: 400,
        display: "flex",
        flexDirection: "column"
    },
    media: {
        //height: 140
        height: 220,
        width: "100%"
    },
    actions: {
        display: "flex",
        marginTop: "auto"
    }
});

export default function TechniqueCard(props) {
    const classes = useStyles();

    function getThumb(video) {
        if (video == null || video === '') {
            return "novideo.png"
        }
        let ytl = video.split("?t=")[0] // remove timestamp before finding thumbnail
        let yti = ytl.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
        let thumbUrl = "http://i3.ytimg.com/vi/" + yti[1] + "/hqdefault.jpg";
        return thumbUrl;
    }


    return (
        <div className="techniqueCard">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={getThumb(props.technique.video)}
                        title={props.technique.name}
                        onClick={() => props.setTechniqueId(props.technique.id)}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="subtitle1">
                            {props.technique.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.actions}>
                    <BeltLabel beltColor={props.technique.belt} />
                </CardActions>
            </Card>
        </div>
    );
}
