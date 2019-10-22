import React from 'react';
import {ExpoConfigView} from '@expo/samples';

export default class ReferenceScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ExpoConfigView/>;
    }

    /**
     * Go ahead and delete ExpoConfigView and replace it with your content;
     * we just wanted to give you a quick view of your config.
     */
}
