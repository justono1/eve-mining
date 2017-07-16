var React = require('react');

var Marketing = React.createClass({
  render: function() {
    return(
      <div>
        <header className="section-container">
          <div className="row">
            <div className="small-12 columns">
              <h1>EVE Online Mining App</h1>
              <p>Use this to tracking mining operations within your fleet.</p>
            </div>
          </div>
        </header>
        <main className="section-container">
          <div className="row">
            <div className="small-12 medium-8 columns">
              <p>This app is used only for fleet bosses. The ESI API only allows fleet bosses to manage and track the status of fleets.</p>
              <p>In this app you will be able to:</p>
              <ul>
                <li>Track the type of ships in your mining fleet.</li>
                <li>Track the time that a member has been in fleet and particapting in the mining operations.</li>
                <li>Track ore inventory and calculate price.</li>
                <li>Manage payout amounts based on ship type.</li>
                <li>Automatically calculate the payout for each members particapation</li>
                <li>Set a corporation tax on the payouts</li>
              </ul>

              <div className="callout warning">
                <p>This is the first version of the app and more update will be to come. if you have any suggestions for the app contact <a href="mailto:info@evemining.co">info@evemining.co</a></p>
              </div>

            </div>
            <div className="small-12 medium-4 columns">
              <div className="callout secondary">
                <h4>Login</h4>
                <a href="/login" className="button">Login</a>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="row">
            <div className="small-12 columns">
              <p>&copy;2017 All Rights Reserved EVE Minning App</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
});

module.exports = Marketing;