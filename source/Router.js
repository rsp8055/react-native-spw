import React, { Component } from 'react';
import {
    Stack,
    Scene,
    Router,
    Drawer,
    Actions
} from 'react-native-router-flux';
import {
    PostJob,
    HomeComp,
    ImageUrl,
    LoginComp,
    RequestJob,
    WelcomeComp,
    RegisterComp,
    WelcomeDrawerComp,
    HomeDrawerComp,
    PostNewJob,
} from './component';
import TryComp from './component/TryComp';
import { RequestNewJob } from './component/home/job/RequestNewJob';

const RouterComponent = () => {

    return (

        <Router>

            <Scene
            // key="childComponent"
            // titleStyle={styles.titleTextStyle}
            // renderLeftButton={<LeftArrow leftIcon={ImageUrl.leftGreenIconUri} />}
            // renderLeftButton={this.leftPlaceholder}
            // renderRightButton={this.rightPlaceholder} 
            >

                <Scene key="tryComp"
                    // initial
                    component={TryComp}
                    hideNavBar={true}
                />

                <Scene key="loginComp"
                    // initial
                    component={LoginComp}
                    hideNavBar={true}
                />

                <Scene key="registerComp"
                    // initial
                    component={RegisterComp}
                    hideNavBar={true}
                />

                <Drawer hideNavBar={true}
                    key="welcomeDrawerComp"
                    initial
                    contentComponent={WelcomeDrawerComp}
                    drawerImage={ImageUrl.menuUri}
                    drawerWidth={300} >

                    <Scene key="welcomeComp"
                        initial
                        component={WelcomeComp}
                        hideNavBar={true}
                    />

                    <Scene key="postJobComp"
                        // initial
                        component={PostJob}
                        hideNavBar={true}
                    />

                    <Scene key="requestJobComp"
                        // initial
                        component={RequestJob}
                        hideNavBar={true}
                    />

                </Drawer>

                <Drawer hideNavBar={true}
                    key="homeDrawerComp"
                    // initial
                    contentComponent={HomeDrawerComp}
                    drawerImage={ImageUrl.menuUri}
                    drawerWidth={300} >

                    <Scene key="homeComp"
                        // initial
                        component={HomeComp}
                        hideNavBar={true}
                    />

                </Drawer>

                <Scene key="postNewJob"
                    // initial
                    hideNavBar={true}
                    component={PostNewJob}
                />

                <Scene key="requestNewJob"
                    // initial
                    hideNavBar={true}
                    component={RequestNewJob}
                />

            </Scene>

        </Router >

    );

};

export default RouterComponent;