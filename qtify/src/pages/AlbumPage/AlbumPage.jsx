import { useParams } from "react-router";
import styles from "./AlbumPage.module.css";

export default function AlbumPage() {
    const {albumid} = useParams();
    return (
        <div className={styles.albumpage_wrapper}><p>{albumid}</p></div>
        
    )
}