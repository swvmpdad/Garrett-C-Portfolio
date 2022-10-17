import React from "react";
import pdf from './William-Campbell.pdf';

class DownloadLink extends React.Component {
    render() {
        return (
            <>
            <p>For a copy of my resume, please</p>
            <a href={this.props.src} download>{this.props.children}</a>
            </>
        )
    }
}


class Resume extends React.Component {
    render() {
        return (
            <DownloadLink src={pdf}>Click Here</DownloadLink>
        )
    }
}

export default Resume;