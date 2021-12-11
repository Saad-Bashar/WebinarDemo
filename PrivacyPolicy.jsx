import React from 'react'
import { View, Text, ScrollView, Pressable, StyleSheet, useWindowDimensions, Animated } from 'react-native'
import { SafeAreaView, } from 'react-native-safe-area-context'

export default function PrivacyPolicy() {
    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    }

    const [btnDisable, setBtnDisable] = React.useState(true)
    const AnimatedProgressValue = new Animated.Value(0)
    const {width} = useWindowDimensions()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                scrollEventThrottle={16}
                onScroll={({nativeEvent})=>{
                    const progress = (nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y) / nativeEvent.contentSize.height
                    console.log("progress ", progress)
                    AnimatedProgressValue.setValue(progress)
                    if(isCloseToBottom(nativeEvent)){
                        if(btnDisable) {
                            setBtnDisable(false)
                        }
                    }
                }}
            >
                <View style={{ padding: 20 }}>
                    <Text style={{ lineHeight: 21 }}>
                        Qui pariatur elit voluptate ad proident ex irure. Sint magna duis pariatur aute quis duis incididunt adipisicing incididunt. Aute anim adipisicing commodo duis non sit mollit velit. Qui non nostrud qui ad eu aute et laboris quis sint consequat commodo laborum. Et reprehenderit enim esse consequat aliqua deserunt esse. Est aute cillum id ad dolore. In do consectetur nisi occaecat dolore tempor amet consectetur occaecat est dolor sint dolore aliqua.

                        Magna sunt officia exercitation non magna velit qui. Ex aliquip quis commodo velit veniam dolor enim voluptate magna cupidatat labore irure consequat labore. Ipsum aliquip non do adipisicing. Duis laboris ex exercitation magna amet ad dolore nostrud. Cillum in commodo commodo officia nisi aute adipisicing.

                        Veniam nulla proident eiusmod qui consequat velit velit ipsum eiusmod. Ipsum consectetur et eu labore consequat eiusmod laborum irure nisi fugiat elit exercitation anim. Lorem aliqua culpa tempor deserunt voluptate veniam eu eiusmod sunt. Aute exercitation deserunt fugiat consectetur fugiat tempor tempor duis aliqua cillum voluptate.

                        Consectetur eu tempor laboris voluptate tempor mollit incididunt consequat occaecat et velit ea consequat. Officia consectetur tempor magna esse cillum deserunt fugiat nostrud exercitation commodo dolore fugiat esse. Dolor aliquip occaecat in officia excepteur consequat laborum deserunt aliqua consequat nisi duis minim. Quis eu laborum eiusmod aliquip. Enim proident aliquip dolore quis amet minim culpa esse.

                        Nostrud ut Lorem est duis magna dolor ea cillum cupidatat deserunt. Proident anim anim Lorem sint exercitation ullamco enim eiusmod. Qui elit exercitation ea mollit aute anim in magna minim commodo. Commodo eiusmod pariatur sint tempor ut aute sit deserunt do minim in. Anim incididunt occaecat do ex id irure et et non. Deserunt minim anim magna labore. Dolor aute reprehenderit proident aliqua.

                        Qui nostrud dolore adipisicing nulla incididunt quis veniam magna officia minim mollit eu irure nostrud. Incididunt mollit adipisicing Lorem commodo dolor fugiat in esse dolor. Dolor ea incididunt ex anim quis nostrud exercitation nisi. Ut aliquip in laboris reprehenderit commodo culpa. Velit ut in proident dolore aliqua ullamco eu aliqua voluptate ipsum. Qui tempor voluptate excepteur laborum ut.

                        Fugiat minim consectetur est officia. Officia consequat deserunt irure reprehenderit anim nulla cupidatat magna eu ullamco. Exercitation sit aliqua mollit occaecat aute voluptate in voluptate minim do. Deserunt veniam magna do in enim ut et minim minim. Ipsum proident proident officia nisi culpa laborum.

                        Qui minim qui aliqua reprehenderit amet magna irure voluptate aliqua anim labore ut mollit. Tempor reprehenderit non in duis esse. Tempor tempor duis cillum proident do id ipsum aliqua ipsum Lorem. Veniam dolor dolore nisi ad magna officia voluptate exercitation in exercitation.

                        Ipsum consectetur duis ad laborum consectetur. Incididunt aliqua sunt sit deserunt proident pariatur cupidatat laborum irure quis duis nulla. Lorem ullamco esse ex do. Fugiat do aliqua dolor qui nisi ea. Culpa amet cillum do pariatur eu sunt et nulla ut laboris culpa fugiat pariatur ea. Nulla nostrud duis magna proident laborum non dolore aliqua nulla laboris ipsum.

                        Incididunt excepteur consectetur aliquip enim id dolore do ullamco deserunt eu aute esse aute. Proident magna minim enim anim adipisicing sunt qui eiusmod proident magna. Aliqua duis id non pariatur Lorem voluptate quis. Id elit anim proident do. Ullamco in consectetur amet nostrud.

                        Consectetur quis aliquip cillum amet consequat. Esse dolore cillum aliquip ex nisi. Et est nulla exercitation excepteur nostrud nostrud excepteur. Occaecat sit laboris dolore sit eu magna id. Tempor commodo nostrud fugiat commodo officia. Quis laboris sint id nulla velit ipsum incididunt esse reprehenderit. Voluptate qui ullamco cupidatat est.

                        Mollit laboris duis veniam tempor laborum esse labore et magna nostrud tempor. Do ullamco ex anim occaecat Lorem ullamco Lorem. Consequat do sunt culpa cupidatat tempor.

                        Et voluptate tempor aute mollit et adipisicing nostrud pariatur fugiat id anim dolore et ut. Id laboris ad aliquip irure eiusmod ex exercitation cillum cillum consequat adipisicing minim fugiat. Consectetur in commodo aliquip reprehenderit non elit culpa deserunt anim culpa esse aliquip minim. Id nisi elit nostrud sunt do.

                        Ex consectetur mollit enim culpa laboris magna anim aliqua voluptate non aute qui proident. Laboris adipisicing incididunt laborum Lorem consectetur deserunt minim duis nostrud sunt occaecat aliqua aliquip. Eiusmod ea cillum velit consectetur adipisicing excepteur. Minim incididunt quis fugiat exercitation duis ex do ut. Occaecat tempor reprehenderit adipisicing aute. Do occaecat velit sunt qui pariatur consequat incididunt do proident sit nulla. Amet laborum tempor velit id.
                    </Text>
                </View>
            </ScrollView>
            <Animated.View
                style={{
                    // position: 'absolute',
                    height: 5,
                    width,
                    backgroundColor: "green",
                    transform: [
                    {
                        translateX: - width,
                    },
                    {
                        scaleX: AnimatedProgressValue,
                    },
                    {
                        translateX: width ,
                    },
                    ],
                }}
            />
            <Pressable onPress={() => alert('I AGREE')} disabled={btnDisable} style={[styles.button, btnDisable && styles.btnDisable]}>
                <Text style={[styles.btnText]}>AGREE</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'orange',
        borderRadius: 16, 
        height: 36, 
        alignItems: 'center',
        justifyContent: 'center', 
        margin: 16 
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold'
    },
    btnDisable: {
        backgroundColor: '#ccc'
    }
})
