// Boat/AllBoats.js
import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Boat from './Boat';

const AllBoats = () => {
    return (
        <ScrollView>
            <View>
                <Text style={styles.normalText}>GetABoat - For Sale</Text>

                <Boat
                    title="Sea Ray 500 Sundancer"
                    subtitle="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                    icon_name="ship"
                    poster={require('../img/sea_ray.jpg')}
                />
                <Boat
                    title="Four Winns Horizon 180"
                    subtitle="A sporty look and refined details truly set the Horizon 180 above all others."
                    icon_name="anchor"
                    poster={require('../img/four_winns.jpg')}
                />
                <Boat
                    title="Flipper 640 ST"
                    subtitle="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                    icon_name="ship"
                    poster={require('../img/flipper.jpg')}
                />
                <Boat
                    title="Princess V48"
                    subtitle="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                    icon_name="ship"
                    poster={require('../img/princess.jpg')}
                />
                <Boat
                    title="Bayliner 175 Bowrider"
                    subtitle="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                    icon_name="ship"
                    poster={require('../img/bayliner.jpg')}
                />
                <Boat
                    title="Fairline Targa 47"
                    subtitle="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                    icon_name="ship"
                    poster={require('../img/fairline.jpg')}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    normalText: { // Updated style for normal text
        fontSize: 16,
        color: '#000',
        marginVertical: 10,
        textAlign: 'left',
    },
});

export default AllBoats;
