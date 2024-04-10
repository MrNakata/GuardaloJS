export class Note {
    background   = '';
    images       = [];
    is_archived  = false;
    is_checklist = false;
    is_pinned    = false;
    labels       = [];
    reminder     = '';
    tags         = [];
    text         = '';
    title        = '';

    constructor (
        background,
        images,
        is_archived,
        is_checklist,
        labels,
        reminder,
        tags,
        text,
        title
    ) {
        this.background   = background;
        this.images       = images;
        this.is_archived  = is_archived;
        this.is_checklist = is_checklist;
        this.labels       = labels;
        this.reminder     = reminder;
        this.tags         = tags;
        this.text         = text.replace(/\n/g, `<br>`);
        this.title        = title;
    }

    render = () => {
        const bgc = this.background != '' ? ` ${this.background}` : '';
        return `<div class="notes${bgc}">
            <div class="notes__header">
                <div class="notes__title">
                    ${this.title}
                </div>
                <div class="notes_icons">
                    <i class="icons fa-solid fa-thumbtack"></i>
                </div>
            </div>
            <div class="notes_body">
                <div class="note-item">
                    <div class="note-item__list">
                        ${this._getItem()}
                    </div>
                    <div class="note-item__tag"></div>
                </div>
            </div>
            ${this._getFooter()}
        </div>`;
    }

    _getItem = () => (this.is_checklist) ? this._getChecklist() : this._getText();

    lists = [
        {
            is_checked : true,
            text : `Amet consectetur adipisicing elit`,
        },
        {
            is_checked : false,
            text : `Similique in est quae nemo dolorem!`,
        },
        {
            is_checked : false,
            text : `Impedit deleniti libero dignissimos.`,
        },
        {
            is_checked : false,
            text : `dolor sit nulla modi distinctio?`,
        },
    ];
    _getChecklist = () => {
        let render = '';
        this.lists.forEach(item => {
            render += `
            <div class="note-checklist">
                <div class="note-item__checkbox">
                    <i class="icons fa-regular fa-square${item.is_checked ? '-check' : ''}"></i>
                </div>
                <div class="note-item__label">
                    ${item.text}
                </div>
            </div>`;
        });
        return render;
    }

    _getText = () => {
        return `<div class="note-item__text">${this.text}</div>`;
    }

    _getFooter = () => {
        return `
        <div class="notes_footer">
            <button type="button" class="btn btn-rounded">
                <i class="icons fa-regular fa-bell"></i>
            </button>
            <button type="button" class="btn btn-rounded">
                <i class="icons fa-solid fa-user-plus"></i>
            </button>
            <button type="button" class="btn btn-rounded">
                <i class="icons fa-solid fa-palette"></i>
            </button>
            <button type="button" class="btn btn-rounded">
                <i class="icons fa-regular fa-image"></i>
            </button>
            <button type="button" class="btn btn-rounded">
                <i class="icons fa-regular fa-folder"></i>
            </button>
            <button type="button" class="btn btn-rounded">
                <i class="icons fa-solid fa-ellipsis-vertical"></i>
            </button>
        </div>`;
    }

}