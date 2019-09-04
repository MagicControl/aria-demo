import React from 'react';
import Head from 'next/head';

class GA {
    constructor() {
        this.isAlreadyInitialized = false;
    }
    init(trackingId) {
        if (this.isAlreadyInitialized) return;
        this.dataLayer = (window || {}).dataLayer || [];
        this.trackingId = trackingId;
        ga.track('js', new Date());
        ga.track('config', this.trackingId);
        this.isAlreadyInitialized = true;
    }

    track() {
        this.dataLayer.push(arguments);
    }

    trackAction(actionType, actionData) {
        this.track('event', actionType, actionData);
    }

    trackPageView(screen_name) {
        ga.trackAction('screen_view', {
            screen_name,
        });
    }
}

const ga = new GA();

export const withGA = (Component, viewName) =>
    class extends React.Component {
        componentDidMount() {
            ga.init('UA-146173047-1');
            ga.trackPageView(viewName);
        }

        render() {
            return (
                <>
                    <Head key="ga-script">
                        <script
                            async
                            src="https://www.googletagmanager.com/gtag/js?id=UA-146173047-1"
                        ></script>
                    </Head>
                    <Component />
                </>
            );
        }
    };

export const withClickTracking = (Component, actionType, actionData) =>
    class extends React.Component {
        clickWrapper = (...args) => {
            ga.trackAction(actionType, actionData);
            this.props.onClick(...args);
        };

        render() {
            return <Component {...this.props} onClick={this.clickWrapper} />;
        }
    };
