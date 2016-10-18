jQuery(function($) {
  function createContainer(className) {
    return $.extend(document.createElement('div'), {
      className: 'pure-g ' + (className || 'container')
    });
  }

  function createWrapper(className) {
    return $.extend(document.createElement('div'), {
      className: (className || 'pure-u-1')
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
      className: 'pure-input-1',
      type: 'text',
      name: 'journeyTimes',
      placeholder: '0:25:00',
      pattern: '(\\d+:)?\\d\\d?:\\d\\d',
      required: true
    });
  }

  function createRemoveButton() {
    var removeButton = $.extend(document.createElement('a'), {
      className: 'pure-button button-remove-base'
    });
    removeButton.appendChild(document.createTextNode('Remove'));
    return removeButton;
  }

  function createBase() {
    var container = createContainer('base-item');

    var labelWrapper = createWrapper('pure-u-1-2 pure-u-md-1-4');
    labelWrapper.appendChild(createLabelInput());
    container.appendChild(labelWrapper);

    var timeWrapper = createWrapper('pure-u-1-4 pure-u-md-1-8');
    container.appendChild(timeWrapper);
    timeWrapper.appendChild(createTimeInput());

    var removeWrapper = createWrapper('pure-u-1-4 pure-u-md-1-8');
    container.appendChild(removeWrapper);
    removeWrapper.appendChild(createRemoveButton());

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
    var wrapper = createWrapper('pure-u-1-2 pure-u-md-1-4');
    wrapper.appendChild(createAddButton());
    container.appendChild(wrapper);

    return container;
  }

  $('.base-list').append(createWrappedAddButton);

  $('.base-list').on('click', '.button-add-base', function(event) {
    event.preventDefault();
    var newBase = createBase();
    $(this).closest('.container').before(newBase);
    newBase.querySelector('input').focus();
  });

  $('.base-list').on('click', '.button-remove-base', function(event) {
    event.preventDefault();
    $(this).closest('.base-item').remove();
  });
});
