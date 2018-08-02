var React = require('react');
var ReactDOM = require('react-dom');
var CreateClass = require('create-react-class');

var Bosses = CreateClass({
    getInitialState: function() {
        return({
            bosses: []
        });
    },
    render: function() {
        var bosses = this.state.bosses;
        bosses = bosses.map(function (boss, index) {
            return(
                <li key={index}>
                    <span className={boss.obj.available}></span>
                    <span className="name">{boss.obj.name}</span>
                    <span className="specs">{boss.obj.specs}</span>
                    <span className="dist">{Math.floor(boss.obj.dist.calculated)} km</span>
                </li>
            );
        });
        return (
            <div id="ninja-conatiner">
            <form id="search" onSubmit={this.handelSubmit}>
            <label>Enter your latitude</label>
        <input type="text" ref="lat" placeholder="Latitude" required />
        <label>Enter your longitude</label>
        <input type="text" ref="lng" placeholder="Longitude" required />
        <input type="submit" value="Find Poha Store" />
            </form>
            <ul>{bosses}</ul>
            </div>
        );
    },
    handelSubmit: function (e) {
        e.preventDefault();
        var lng = this.refs.lng.value;
        var lat = this.refs.lat.value;

        fetch('/api/poha-boses/?lng' + lng + '&lat=' + lat).then(function (data) {
            return data.json()
        }).then( json => {
            this.setState({
                bosses: json
            });
        });
    }
});

ReactDOM.render(<Bosses/>, document.getElementById('ninjas'));