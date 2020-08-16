import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item; //we are pulling out "items" from this.props.item which is actually the store.js
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({_id, name}) => ( //looping through the items
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)} //id comes from the items.map function
                                        >
                                    &times; {/* this is just an "x" button */}
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}
//when you bring in an action from redux it becomes a prop
ShoppingList.propTypes = { 
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem})(ShoppingList);