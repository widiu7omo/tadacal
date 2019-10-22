import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function LeftCardIcon(props) {
    return (
        <Ionicons
            name={props.name}
            size={26}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    );
}
