class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  render() {
    let list = '';

    if(this.state.currency === 'USD') {
      list = <li className="list-group-item">
             Bitcoing rate for {this.props.bpi.USD.description}
               : <span class="badge badge-primary width=device-width">
                   {this.props.bpi.USD.code}
                 </span>
                 <strong>{this.props.bpi.USD.rate}</strong>
            </li>
    } else if(this.state.currency === 'GBP') {
        list = <li className="list-group-item">
        Bitcoing rate for {this.props.bpi.GBP.description}
          : <span class="badge badge-primary width=device-width">
              {this.props.bpi.GBP.code}
            </span>
            <strong>{this.props.bpi.GBP.rate}</strong>
       </li>
    } else if(this.state.currency === 'EUR') {
        list = <li className="list-group-item">
        Bitcoing rate for {this.props.bpi.EUR.description}
          : <span class="badge badge-primary width=device-width">
              {this.props.bpi.EUR.code}
            </span>
            <strong>{this.props.bpi.EUR.rate}</strong>
       </li>
    }
    return (
      <div>
        <ul className="list-group">
          {list}
        </ul>
        <br />
        <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
          <option value="USD">United States: USD</option>
          <option value="GBP">Great Britian: GBP</option>
          <option value="EUR">Europe:        EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;