import React from "react";
import Grid from "@material-ui/core/Grid";
import layoutStyles from "../styles/layout.module.scss";
import videoStyles from "../styles/video.module.scss";

export default function VideoListPage() {
    return (
        <div className={layoutStyles.root}>
            <Grid container>
                <Grid item lg={2} md={3} xl={3} xs={6} sm={4} className={videoStyles.box}>
                    <img src={"https://cdn.clien.net/web/api/file/F01/9581533/fb803eda1eed7.jpg?w=780&h=30000"} className={videoStyles.videoItem}/>
                </Grid>
                <Grid item lg={2} md={3} xl={3} xs={6} sm={4} className={videoStyles.box}>
                    <img src={"https://img.hankyung.com/photo/201907/03.20151616.1.jpg"} className={videoStyles.videoItem}/>
                </Grid>
                <Grid item lg={2} md={3} xl={3} xs={6} sm={4} className={videoStyles.box}>
                    <img src={"https://cdn.clien.net/web/api/file/F01/9581533/fb803eda1eed7.jpg?w=780&h=30000"} className={videoStyles.videoItem}/>
                </Grid>
                <Grid item lg={2} md={3} xl={3} xs={6} sm={4} className={videoStyles.box}>
                    <img src={"https://img.hankyung.com/photo/201907/03.20151616.1.jpg"} className={videoStyles.videoItem}/>
                </Grid>
            </Grid>
        </div>
    );
}
