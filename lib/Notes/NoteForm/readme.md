# NoteForm
A component for creating/editing a note

## Description
Different applications may want to have an ability to create/edit notes and attach them to their entities. `<NoteForm />`
is a reusable dumb component which apps can use for editing and creating a note. It provides the whole layout for create and edit note pages, including all needed panes, accordions, fields, buttons and the form itself.

## Usage example
```javascript
import { NoteForm } from '@folio/stripes-smart-components';

const entityTypeTranslations = {
  provider: 'ui-eholdings.notes.entityType.provider',
  package: 'ui-eholdings.notes.entityType.package',
  title: 'ui-eholdings.notes.entityType.title',
};

class NoteEditRoute extends Component {
  static propTypes = {
    noteTypes: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })).isRequired,
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const {
      noteTypes,
      onSubmit,
      onCancel,
    } = this.props;

    const noteData = {
      type: '2',
      title: 'Note title',
      content: 'Some details go here...',
    };

    const noteMetadata = {
      lastUpdatedDate: '2019-04-18T12:52:40.181+0000',
    };

    const referredRecord = {
      type: 'provider',
      name: 'EBSCO',
    };

    const linkedRecords = [
      { count: 1, type: 'provider' },
      { count: 4, type: 'package' },
      { count: 145, type: 'title' },
    ];

    return (
      <TitleManager record={noteData.title}>
        <NoteForm
          noteData={noteData}
          noteMetadata={noteMetadata}
          noteTypes={noteTypes}
          referredRecord={referredRecord}
          linkedRecords={linkedRecords}
          entityTypeTranslations={entityTypeTranslations}
          paneHeaderAppIcon="eholdings"
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
      </TitleManager>
    );
  }
}

export default connect(
  () => ({
    noteTypes: [
      {
        label: 'type 1',
        value: '1',
      },
      {
        label: 'type 2',
        value: '2',
      }
    ],
  }), {
    onSubmit: (values) => {
      return { type: 'noteEdit', payload: { noteId: 'id', noteData: values } };
    },
    onCancel: () => {
      return { type: 'cancelNoteEdit' };
    },
  }
)(NoteEditRoute);
```