/********************************
 * @file: home page
 * @desc: overview react multi page app
 * @author: leinov
 * @date:2018-12-06
 *******************************/

import React, {Component} from "react";


export default class AppTable extends Component {
    render() {
        return (<div>
            <table className="table table-bordered table-striped table-hover table-condensed">
              <tbody>
              <tr>
                <td colSpan={1} rowSpan={2}>long</td>
                <td colSpan={1}>short</td>
              </tr>
              <tr>
                <td colSpan={1}>short</td>
              </tr>
              </tbody>
            </table>
          </div>)
    }
}
