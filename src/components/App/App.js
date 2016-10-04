import React from 'react';
// import MessageList from '../containers/MessageListContainer'
// import MessageInput from '../containers/MessageInputContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './app.scss';
import ActiveSettingsContainer from '../../containers/ActiveSettingsContainer'
                                        // <div className='formBuilderSettings' id="appSettings">
                                        //     {this.props.children}
                                        // </div>
/*
class SideBar extends React.Component {
    render() {
        return (
            <div className={styles.ghsidebar}>
                <ul>
                </ul>
                This text should be green
            </div>
        )
    }
}
*/



class App extends React.Component {
    componentDidMount() {


      function decode_and_build(){

        var uri_dec = getQueryString()["pointers"];
        var steps = eval(uri_dec)

        steps.forEach(function(stepObj,index) {
          var item = document.querySelector(stepObj.selector);
          item.setAttribute('data-step', index);
          item.setAttribute('data-intro', stepObj.data);
        });
        introJs().start();

        function getQueryString() {
          var result = {}, queryString = location.search.slice(1),
              re = /([^&=]+)=([^&]*)/g, m;

              var test = [
                  '[',
                  '{data:"Im some more data1", selector:"#app > ul > li:nth-child(4)"},',
                  '{data:"Im some more data2", selector:"#app > ul > li:nth-child(3)"},',
                  '{data:"Im some more data3", selector:"#app > ul > li:nth-child(2)"},',
                  '{data:"Im some data4", selector:"#app > ul > li:nth-child(1)"}',
                  ']'
              ].join('');

              var queryString1 = "pointers=" + encodeURIComponent("[{data:'Im some data', selector:'#app > ul > li:nth-child(1)'},{data:'Im some more data', selector:'#app > ul > li:nth-child(2)'}]");

              var queryString = "pointers=" + encodeURIComponent(test);

          while (m = re.exec(queryString)) {
            result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
          }

          return result;
        }
      }
      decode_and_build();


    }
    render() {
        return (
            <MuiThemeProvider>
                <ActiveSettingsContainer />
            </MuiThemeProvider>
        )
    }
}


      /* multi
         <Route path="/" handler={App}>
           <DefaultRoute handler={Home} />
           <Route name="about" handler={About} />
           <Route name="contact" handler={Contact} />
         </Route>
         comment */

// App.propTypes = {
//     // children: React.PropTypes.node
// };




export default App;
