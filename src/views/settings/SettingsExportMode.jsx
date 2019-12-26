import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
// import SettingsCollapsableItem from './collapsable/SettingsCollapsableItem'
import SettingsBanner from './SettingsBanner'
import SettingsStandard from './SettingsExportModeStandard'
import SettingsAVD from './SettingsExportModeAVD'
import SettingsFlare from './SettingsExportModeFlare'
import SettingsDemo from './SettingsExportModeDemo'
import SettingsStandalone from './SettingsExportModeStandalone'
import {handleExportMode} from '../../redux/actions/compositionActions'
import settings_export_mode_selector from '../../redux/selectors/settings_export_mode_selector'
import ExportModes from '../../helpers/ExportModes'
import Variables from '../../helpers/styles/variables'

const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      padding: '10px',
    },
    wrapperContainer: {
      width: '100%',
      border: '1px solid #555',
      backgroundColor: Variables.colors.gray_darkest,
      padding: '10px',
    },
    title: {
      width: '100%',
      fontSize: '14px',
      paddingBottom: '4px',
    },
    modes: {
      padding: '0 0 0 10px',
    },
    modeItem: {
      paddingTop: '10px',
    },
})

class SettingsExportMode extends React.PureComponent {

  descriptions = {
    [ExportModes.STANDARD]: 'Exports animation as a json file',
    [ExportModes.STANDALONE]: 'Exports animation and player bundled in a single file',
    [ExportModes.BANNER]: 'Exports a bundle of files for banner usage',
  }

  handleChange = (value) => {
    this.props.handleExportMode(value)
  }

  getDescription() {

  }

	render(){ 
		return (
      <div className={css(styles.wrapper)}>
        <div className={css(styles.wrapperContainer)}>
            <div className={css(styles.title)}>Export Modes</div>
            <div className={css(styles.modes)}>
              <div className={css(styles.modeItem)}>
                <SettingsStandard />
              </div>
              <div className={css(styles.modeItem)}>
                <SettingsDemo />
              </div>
              <div className={css(styles.modeItem)}>
                <SettingsFlare />
              </div>
              <div className={css(styles.modeItem)}>
                <SettingsStandalone />
              </div>
              <div className={css(styles.modeItem)}>
                <SettingsBanner />
              </div>
              <div className={css(styles.modeItem)}>
                <SettingsAVD />
              </div>
            </div>
          {/*<SettingsListDropdown 
            title='Export mode'
            description={this.descriptions[this.props.export_mode]}
            onChange={this.handleChange}
            current={this.props.export_mode}
            options={[
              {value:ExportModes.STANDARD, text: 'Standard'}, 
              {value:ExportModes.STANDALONE, text: 'Standalone'}, 
              {value:ExportModes.BANNER, text: 'Banner'}
            ]}  
          />*/}
          {
            /*this.props.export_mode === ExportModes.BANNER &&
            <SettingsBanner />*/
          }
        </div>
      </div>
    )
	}
}

function mapStateToProps(state) {
  return settings_export_mode_selector(state)
}

const mapDispatchToProps = {
  handleExportMode: handleExportMode,
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsExportMode)