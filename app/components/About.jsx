var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h3>About Component</h3>
      This is a neat little React Project, that can actually show you the current temperatur
      at any city you like!
    </div>
  );
};

module.exports = About;