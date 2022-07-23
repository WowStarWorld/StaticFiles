function createModal(header,body,footer){
    let modal = $('<div>').addClass('modal fade');
    let modal_dialog = $('<div>').addClass('modal-dialog');
    let modal_content = $('<div>').addClass('modal-content');
    let modal_header = $('<div>').addClass('modal-header');
    let modal_body = $('<div>').addClass('modal-body');
    let modal_footer = $('<div>').addClass('modal-footer');
    modal_header.append($('<h5>').addClass('modal-title').html(header));
    modal_body.append(body);
    modal_footer.append(footer);
    modal_content.append(modal_header).append(modal_body).append(modal_footer);
    modal_dialog.append(modal_content);
    modal.append(modal_dialog);
    return modal;
}