/**
 Module for triggering marketing messages
 @author mtownsend
 @since Jan 2021
*/

Events.Marketing = [{
  /* Play Penrose! */
  title: _('from game author'),
  isAvailable: () => !$SM.get('marketing.penrose'),
  scenes: {
    'start': {
      text: [
        _('Here\'s a new game. Would you like to try it?'),
        _('It\'s fun. You could easily get addicted.')
      ],
      notification: _('a strange thrumming, pounding and crashing. and then gone.'),
      blink: true,
      buttons: {
        'give in': {
          text: _('give in'),
          onClick: () => {
            $SM.set('marketing.penrose', true);
          },
          link: 'https://penrose.doublespeakgames.com/?utm_source=adarkroom&utm_medium=crosspromote&utm_campaign=event'
        },
        'ignore': {
          text: _('ignore it'),
          nextScene: 'end'
        }
      }
    }
  },
  audio: AudioLibrary.EVENT_NOISES_INSIDE
}];
