//=============================================================================
// BB_WindowSelector3.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc 窗口外观切换插件
 * @author ビービー  汉化:硕明云书
 *
 * @param Variable ID
 * @text 变量ID
 * @desc 当指定的 ID 变量为 2 且窗口 2 为 3 时，将显示窗口 3。
 * 否则，将显示默认窗口。default：0
 * @default 0
 * 
 * @param Window1 Opacity
 * @text 窗口 1 不透明度
 * @desc 根据具有指定 ID 的变量的数值调整窗口的透明度。default：192
 * @default 192
 *
 * @param Window2 Opacity
 * @text 窗口 2 不透明度
 * @desc 根据具有指定 ID 的变量的数值调整窗口的透明度。default：192
 * @default 192
 * 
 * @param Window3 Opacity
 * @text 窗口 3 不透明度
 * @desc 根据具有指定 ID 的变量的数值调整窗口的透明度。default：192
 * @default 192
 * 
 * @param Window1 OutlineColor
 * @text 窗口 1 字体轮廓颜色
 * @desc 更改窗口字符框的颜色。 R（红色）、G（绿色）、B（蓝色）、A（强度）按顺序排列，用逗号 （，） 分隔。default：rgba(0, 0, 0, 0.5)
 * @default rgba(0, 0, 0, 0.5)
 * 
 * @param Window1 OutlineWidth
 * @text 窗口 1 字体轮廓宽度
 * @desc Windowの文字枠の幅を変更します。default：4
 * @default 4
 * 
 * @param Window2 OutlineColor
 * @text 窗口 2 字体轮廓颜色
 * @desc Window2更改字符框架的颜色。R(赤),G(緑),B(青),A(強度)用逗号 （，） 分隔。default：rgba(0, 0, 0, 0.5)
 * @default rgba(0, 0, 0, 0.5)
 * 
 * @param Window2 OutlineWidth
 * @text 窗口 2 字体轮廓宽度
 * @desc Window更改字符框架的宽度。default：4
 * @default 4
 * 
 * @param Window3 OutlineColor
 * @text 窗口 3 字体轮廓颜色
 * @desc Window3更改字符框架的颜色。 R（红色）、G（绿色）、B（蓝色）、A（强度）（按逗号 （，） 排序）。default：rgba(0, 0, 0, 0.5)
 * @default rgba(0, 0, 0, 0.5)
 * 
 * @param Window3 OutlineWidth
 * @text 窗口 3 字体轮廓宽度
 * @desc Windowの文字枠の幅を変更します。default：4
 * @default 4
 * 
 * @param Window1 DimmerColor
 * @text 窗口 1 深色背景色
 * @desc 窗口 1 设置为深色时的背景色
 * default：rgba(0, 0, 0, 0.6)
 * @default rgba(0, 0, 0, 0.6)
 * 
 * @param Window1 DimGradationColor
 * @text 窗口 1 暗淡渐变颜色
 * @desc Window1当背景颜色渐变设置为深色时。
 * default：rgba(0, 0, 0, 0)
 * @default rgba(0, 0, 0, 0)
 * 
 * @param Window2 DimmerColor
 * @text 窗口 2 深色背景色
 * @desc Window2设置为深色时的背景色
 * default：rgba(0, 0, 0, 0.6)
 * @default rgba(0, 0, 0, 0.6)
 * 
 * @param Window2 DimGradationColor
 * @text 窗口 2 暗淡渐变颜色
 * @desc Window2当背景颜色渐变设置为深色时
 * default：rgba(0, 0, 0, 0)
 * @default rgba(0, 0, 0, 0)
 * 
 * @param Window3 DimmerColor
 * @text 窗口 3 深色背景色
 * @desc Window3设置为深色时的背景色
 * default：rgba(0, 0, 0, 0.6)
 * @default rgba(0, 0, 0, 0.6)
 * 
 * @param Window3 DimGradationColor
 * @text 窗口 3 暗淡渐变颜色
 * @desc Window3当背景颜色渐变设置为深色时。
 * default：rgba(0, 0, 0, 0)
 * @default rgba(0, 0, 0, 0)
 * 
 * @help Variable ID：当参数中指定的 ID 变量为 2 时，将显示 Window2，
 * 当它为 3 时，显示窗口 3。 否则，显示窗口。
 * --------------------------------------------------------------------------
 * Window1～3 Opacity：您可以设置每个窗口的透明度。
 * 透明度范围＝0～255。默认值＝192。
 * --------------------------------------------------------------------------
 * 窗口可分别调节文字框颜色、文字框宽度。
 * 变更的只有信息窗口。
 * 
 * OutlineColor：更改文字框的颜色。
 * 默认：rgba(0, 0, 0, 0.5)
 * R（红色）、G（绿色）、B（蓝色）、A（强度）按顺序排列，用逗号 （，） 分隔。
 * RGB(赤緑青)0～255(0=明亮,255=黑暗)A（强度）指定在 0 ~ 1 之间（0 = 透明，1 = 不透明）。
 * 
 * OutlineWidth：Window更改的边框宽度。
 * デフォルト：4
 * --------------------------------------------------------------------------
 * 您可以在窗口设置为深色时指定背景色。
 * 
 * DimmerColor：背景中心部分的颜色规范
 * 默认：rgba(0, 0, 0, 0.6)
 * R(赤),G(緑),B(青),A(強さ)の順番でカンマ(,)区切りで指定。
 * RGB(赤緑青)在0~255之间（0=亮，255=暗），A（强度）在0~1之间（0=透明，1=不透明）。
 * 
 * DimGradationColor：背景中上下渐变的颜色规范
 * 默认：rgba(0, 0, 0, 0)
 * R(赤),G(緑),B(青),A以逗号 （，） 分隔，顺序为 （强度）。
 * RGB(赤緑青)这0～255(0=明亮,255=黑暗)指定在之间、A(强度)这0～1(0=透明,1=不透明)指定之间
 * --------------------------------------------------------------------------
 * 利用規約：
 * 无需作者许可即可修改和重新分发，使用形式（商用、18禁利用等）
 * 也没有限制。
 * 
 * BLOG:http://bb-entertainment-blog.blogspot.jp/
 *
 */

(function() {

        var parameters = PluginManager.parameters('BB_WindowSelector3');
        var BBWSvar = Number(parameters['Variable ID'] || '0');
        var BBWS1o = Number(parameters['Window1 Opacity'] || '192');
        var BBWS2o = Number(parameters['Window2 Opacity'] || '192');
        var BBWS3o = Number(parameters['Window3 Opacity'] || '192');
        var BBWS1oc = String(parameters['Window1 OutlineColor'] || 'rgba(0, 0, 0, 0.5)');
        var BBWS1ow = Number(parameters['Window1 OutlineWidth'] || '4');
        var BBWS2oc = String(parameters['Window2 OutlineColor'] || 'rgba(0, 0, 0, 0.5)');
        var BBWS2ow = Number(parameters['Window2 OutlineWidth'] || '4');
        var BBWS3oc = String(parameters['Window3 OutlineColor'] || 'rgba(0, 0, 0, 0.5)');
        var BBWS3ow = Number(parameters['Window3 OutlineWidth'] || '4');
        var BBWS1dm = String(parameters['Window1 DimmerColor'] || 'rgba(0, 0, 0, 0.6)');
        var BBWS2dm = String(parameters['Window1 DimGradationColor'] || 'rgba(0, 0, 0, 0)');
        var BBWS3dm = String(parameters['Window2 DimmerColor'] || 'rgba(0, 0, 0, 0.6)');
        var BBWS4dm = String(parameters['Window2 DimGradationColor'] || 'rgba(0, 0, 0, 0)');
        var BBWS5dm = String(parameters['Window3 DimmerColor'] || 'rgba(0, 0, 0, 0.6)');
        var BBWS6dm = String(parameters['Window3 DimGradationColor'] || 'rgba(0, 0, 0, 0)');

// 画像の読み込み
var _Scene_Boot_prototype_loadSystemWindowImage = Scene_Boot.prototype.loadSystemWindowImage;
Scene_Boot.prototype.loadSystemWindowImage = function() {
    ImageManager.loadSystem('Window');
    ImageManager.loadSystem('Window2');
    ImageManager.loadSystem('Window3');
};

// ウインドウ画像の切り替え
var _Window_Base_prototype_update = Window_Base.prototype.update;
Window_Base.prototype.update = function() {
    Window.prototype.update.call(this);
    if($gameVariables.value(BBWSvar) == 3){
        this.windowskin = ImageManager.loadSystem('Window3');
        this.backOpacity = BBWS3o;
        this.contents.outlineColor = BBWS3oc;
        this.contents.outlineWidth = BBWS3ow;
    }else if($gameVariables.value(BBWSvar) == 2){
        this.windowskin = ImageManager.loadSystem('Window2');
        this.backOpacity = BBWS2o;
        this.contents.outlineColor = BBWS2oc;
        this.contents.outlineWidth = BBWS2ow;
    }else{
        this.windowskin = ImageManager.loadSystem('Window');
        this.backOpacity = BBWS1o;
        this.contents.outlineColor = BBWS1oc;
        this.contents.outlineWidth = BBWS1ow;
    }
    this.updateTone();
    this.updateOpen();
    this.updateClose();
    this.updateBackgroundDimmer();
};

var _Window_Base_prototype_updateBackgroundDimmer = Window_Base.prototype.updateBackgroundDimmer;
Window_Base.prototype.updateBackgroundDimmer = function() {
    if (this._dimmerSprite) {
        this._dimmerSprite.opacity = this.openness;
        this.refreshDimmerBitmap();
    }
};

var _Window_Base_prototype_refreshDimmerBitmap = Window_Base.prototype.refreshDimmerBitmap;
Window_Base.prototype.refreshDimmerBitmap = function() {
    if (this._dimmerSprite) {
        var bitmap = this._dimmerSprite.bitmap;
        var w = this.width;
        var h = this.height;
        var m = this.padding;
        if($gameVariables.value(BBWSvar) == 3){
            var c1 = this.dimColor5();
            var c2 = this.dimColor6();
        }else if($gameVariables.value(BBWSvar) == 2){
            var c1 = this.dimColor3();
            var c2 = this.dimColor4();
        }else{
            var c1 = this.dimColor1();
            var c2 = this.dimColor2();
        }
        bitmap.resize(w, h);
        bitmap.gradientFillRect(0, 0, w, m, c2, c1, true);
        bitmap.fillRect(0, m, w, h - m * 2, c1);
        bitmap.gradientFillRect(0, h - m, w, m, c1, c2, true);
        this._dimmerSprite.setFrame(0, 0, w, h);
    }
};

var _Window_Base_prototype_dimColor1 = Window_Base.prototype.dimColor1;
Window_Base.prototype.dimColor1 = function() {
    return BBWS1dm;
};

var _Window_Base_prototype_dimColor21 = Window_Base.prototype.dimColor2;
Window_Base.prototype.dimColor2 = function() {
    return BBWS2dm;
};

var _Window_Base_prototype_dimColor3 = Window_Base.prototype.dimColor3;
Window_Base.prototype.dimColor3 = function() {
    return BBWS3dm;
};

var _Window_Base_prototype_dimColor4 = Window_Base.prototype.dimColor4;
Window_Base.prototype.dimColor4 = function() {
    return BBWS4dm;
};

var _Window_Base_prototype_dimColor5 = Window_Base.prototype.dimColor5;
Window_Base.prototype.dimColor5 = function() {
    return BBWS5dm;
};

var _Window_Base_prototype_dimColor6 = Window_Base.prototype.dimColor6;
Window_Base.prototype.dimColor6 = function() {
    return BBWS6dm;
};


})();