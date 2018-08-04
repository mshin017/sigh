import React from 'react';
import MaterialTitlePanel from './material_title_panel';
import PropTypes from 'prop-types';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};

const SidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;

  const links = [];

  for (let ind = 0; ind < 10; ind++) {
    links.push(
      <a key={ind} href="#" style={styles.sidebarLink}>Mock menu item {ind}</a>);
  }

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <a href="index.html" style={styles.sidebarLink}>Home</a>
        <a href="responsive_example.html" style={styles.sidebarLink}>Responsive Example</a>
        <div style={styles.divider} />
        {links}
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;


export default class Navbutton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }


    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

        render() {
        return (
            <div>
                <Sidebar
                    sidebar={<p className="top">Menu</p>}
                    sidebarLink={<p>blahblah</p>}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={styles}
                    touchHandleWidth={20}
                >
                    <button className="menu" onClick={() => this.onSetSidebarOpen(true)} ><i class="fas fa-bars fa-2x"></i></button>
                </Sidebar>
            </div >
        )
    }

}