import React from "react";

import Button from "../Components/Button";

class ClassButtonModal extends React.Component {
  state = {
    
    modalIsOpen: false,
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };
  render() {
      return(
          <Button
          onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        />

      )
  }
}
export default ClassButtonModal