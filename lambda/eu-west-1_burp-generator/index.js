/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This is a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent generates a fart and play it.
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.690722ea-9d3f-47a9-a5a6-67cb55d7c2fd';

const languageStrings = {
    'en': {
        translation: {
            SKILL_NAME: 'Burpgenerator',
            HELP_MESSAGE: 'You can say „start burp generator“, or, you can say „stop“... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'de': {
        translation: {
            SKILL_NAME: 'Rülpsgenerator',
            HELP_MESSAGE: 'Du kannst sagen, „Starte Rülpsgenerator“, oder du kannst „Stop“ sagen... Wie kann ich dir helfen?',
            HELP_REPROMPT: 'Wie kann ich dir helfen?',
            STOP_MESSAGE: 'Auf Wiedersehen!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('BurpGeneratorIntent');
    },
    'BurpGeneratorIntent': function () {
    var audioFile = '<audio src="https://s3.eu-central-1.amazonaws.com/ruelps-sounds/ruelpser-1.mp3" />';
    this.emit(':tell', `${audioFile}`);
    this.emit('AMAZON.StopIntent');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        //this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        //this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
