/**
 * BLOCK: bootstrap-alert
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { SelectControl, TextControl } = wp.components;
const { RichText } = wp.editor;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'wpbeirut/block-bootstrap-alert', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'WpBeirut Alert' ), // Block title.
	icon: 'warning', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'bootstrap-alert — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
	attributes: {
		alertType: {
			source: 'attribute',
			attribute: 'data-alert-type',
			selector: 'div[data-alert-type]'
		},
		alertText: {
			source: 'children',
			selector: 'div[data-alert-type]'
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
		let {attributes: {alertType, alertText}, setAttributes} = props;

		let alertTypes = [
			'Primary', 'Secondary', 'Success', 'Danger',
			'Warning','Info','Light','Dark'
		];

		let options = alertTypes.map((item) => ({
			value: item.toLowerCase(),
			label: item
		}));

		if (!alertText) {
			setAttributes({alertType: options[0].value});
		}

		return (
			<div className={ props.className }>
				<div className="bootstrap-alert-title">
					Bootstrap Alert

					<SelectControl 
						options={options}
						value={alertType}
						onChange={(val)=> setAttributes({alertType: val})}
					/>
				</div>
				

				<div className={`alert alert-${alertType}`}>
					

					<RichText
						value={alertText}
						onChange={(val)=> setAttributes({alertText: val})}
					/>
				</div>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( {attributes: {alertType, alertText}} ) {
		return (
			<div>
				<div className={`alert alert-${alertType}`}
					data-alert-type={alertType} role="alert">
					<RichText.Content value={alertText} />
				</div>
			</div>
		);
	},
} );
