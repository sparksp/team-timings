jQuery(function($) {
  function createContainer() {
    return $.extend(document.createElement('div'), {
      className: 'pure-g container'
    });
  }

  function createWrapper() {
    return $.extend(document.createElement('div'), {
      className: 'pure-u-1-2 pure-u-md-1-4 wrapper'
    });
  }

  function createLabelInput() {
    return $.extend(document.createElement('input'), {
      className: 'pure-input-1',
      type: 'text',
      name: 'baseLabels',
      placeholder: 'Base Label',
      required: true
    });
  }

  function createTimeInput() {
    return $.extend(document.createElement('input'), {
      className: 'pure-input-1-2',
      type: 'text',
      name: 'journeyTimes',
      placeholder: '0:25:00',
      pattern: '(\\d+:)?\\d\\d?:\\d\\d',
      required: true
    });
  }

  function createBase() {
    var container = createContainer();

    var labelWrapper = createWrapper();
    labelWrapper.appendChild(createLabelInput());
    container.appendChild(labelWrapper);

    var timeWrapper = createWrapper();
    container.appendChild(timeWrapper);
    timeWrapper.appendChild(createTimeInput());

    return container;
  }

  function createAddButton() {
    var addButton = $.extend(document.createElement('a'), {
      className: 'pure-button button-add-base'
    });
    addButton.appendChild(document.createTextNode('Add Base'));
    return addButton;
  }

  function createWrappedAddButton() {
    var container = createContainer();
    var wrapper = createWrapper();
    wrapper.appendChild(createAddButton());
    container.appendChild(wrapper);

    return container;
  }

  $(".base-list").append(createWrappedAddButton);

  $(".button-add-base").click(function(event) {
    event.preventDefault();
    var newBase = createBase();
    $(this).closest('.container').before(newBase);
    newBase.querySelector("input").focus();
  });
});
