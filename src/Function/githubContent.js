import axios from "axios";
import appVersion from '../version.json';

export default function githubContent(filename) {
    return axios
        .get(
            `https://raw.githubusercontent.com/${filename}?v=${appVersion.version}`
        );
}