/* globals WAY, WAYModuleLoader, $gameStorageSystems */
//===========================================================================
// WAY_StorageSystem.js
//===========================================================================

/*:
@plugindesc ▣ WAY存储插件<WAY_StorageSystem>

@param config
@text 存储系统	
@desc Add Storage Systems to your game.
@type struct<storage>[]
@default

@author waynee95 汉化:硕明云书

@help
============================================================================
 ■ 插件介绍
============================================================================

>>> 这个插件使用新的 MV1.5.0 插件参数，所以我推荐你
更新您的编辑器。 您的项目仍然可以低于 MV1.5.0

这个插件允许您创建不同的存储系统，播放器可以
存放他的物品。 此插件不添加限制播放器的功能
存货。
您可以使用 YEP_CoreEngine 来限制玩家的库存。 还有这个
插件与 YEP_ItemCore 和 YEP_X_ItemCategories 兼容。

将此插件放在列表的底部。

如何创建存储系统：
1. 在插件管理器中打开插件。
2. 单击存储系统。
3. 单击一个空闲行。
4. 现在您可以配置存储系统了。

存储系统的 id 从 0 开始。所以第一个存储系统将
有 id 0，下一个 id 1，...

============================================================================
 ■ 参数概述
============================================================================
菜单背景 - 为场景背景设置图像。

存储标题 - 将显示在标题窗口中的标题。你可以
在此处使用转义码，如 \i[x]、\c[x]。

信息窗口文本 - 将在信息窗口中显示的文本。 %1 将
替换为当前存储容量。

最大容量 - 可以存储的最大项目数。

项目堆栈大小 - 如果此参数不等于无，堆栈将计数
作为关于最大容量的一项。例如，如果堆栈大小
是8，最大容量是20，同一个项目可以存储8次，但
它只会从最大容量中减去 1。这意味着您可以存储
存储系统中的 8x20 个项目。

显示类别 - 存储中是否显示不同的类别
系统菜单？这仅适用于视觉效果。所有允许的类型都将在
一份清单。
当您使用 YEP_X_ItemCategories 时，此参数必须设置为
真的。

允许的项目类型 - 定义哪些项目可以存储在存储中
系统。
您可以使用以下类型：
 - 项目
 - 武器
 - 盔甲
 - 关键项目

Show Loot All Button - 显示存储系统内的全部战利品按钮。什么时候
按你一次掠夺所有物品。

如果您想要更多类别，可以使用 YEP_X_ItemCategories。只需添加
类别名称添加到允许的类型列表。

模式 - 可以是“添加/删除”、“仅添加”或“仅删除”。第一
将是您的经典储物箱，“仅移除”选项将
例如，可以方便地创建战利品箱。

如果您想自定义添加/删除项目按钮的文本，您可以这样做
在场景设置/命令窗口设置中。

如果您在添加/删除项目时自定义声音，您可以这样做
在场景设置/数字窗口设置中。

==================================================== ===========================
 ■ 场景设置
==================================================== ===========================
这是您可以更改存储场景外观的部分。你
可以为每个存储系统单独更改它。

窗口按以下顺序创建：

帮助窗口 - 只是您的默认帮助窗口。
标题窗口 - 显示存储系统的标题。
命令窗口 - 用于选择是否要添加/删除项目的窗口。
类别窗口 - 用于选择项目类别的窗口。
项目窗口 - 显示可用项目的列表，具体取决于
*             类别。
信息窗口 - 显示当前和最大容量。
数字窗口 - 用于输入要添加/删除的项目数量。

============================================================================
 ■ 笔记标签
============================================================================
物品、武器、护甲标签:

<Cannot Store>
这使得物品不能存储在存储系统中。

<Can Store Only In: x>
<Can Store Only In: x, x, x>
这使得该项目只能存储在指定的存储中系统。

============================================================================
 ■ 插件命令
============================================================================
主关键词：存储系统

-----------------------
StorageSystem open id
-----------------------
open - 打开存储系统的关键字。
Keep - 请记住，id 从 0 开始！

id   -   将要打开的存储系统的 ID。 如果没有 id 是
         指定，最后打开的存储系统将被打开。

-----------------------
StorageSystem add id item amount
-----------------------
add - 用于将项目添加到存储系统的关键字。

id - 存储系统的 ID。

item - 将添加的项目 Use $dataItems[id], $dataWeapons[id],
$dataArmors[id].

amount - 将添加的项目数。

-----------------------
StorageSystem remove id item amount
-----------------------
remove - 用于从存储系统中删除项目的关键字。

id - The id of the storage system.

item - The item that will be removed. Use $dataItems[id], $dataWeapons[id],
$dataArmors[id].

amount - Number of items that will be removed.

-----------------------
StorageSystem clear id
-----------------------
clear - 清除存储系统的关键字。

id - The id of the storage system.

-----------------------
StorageSystem change id number
-----------------------
change - 更改存储系统最大容量的关键字。

id - The id of the storage system.

number - New max capacity.

============================================================================
 ■ 脚本调用
============================================================================
全局对象: $gameStorageSystems

$gameStorageSystems.open(id) - 打开存储系统。 如果没有 id 是
指定时，将使用最后打开的。

$gameStorageSystems.storage(id) - 返回存储系统给定ID。

$gameStorageSystems.current() - 返回最后打开的存储系统。

在存储系统对象上调用以下脚本调用。 代替存储与
 $gameStorageSystems.current() or
$gameStorageSystems.storage(id).

storage.title() - Returns the title name.

storage.capacity() - Returns the current capacity.

storage.maxCapacity() - Returns the max capacity.

storage.items() - Returns all stored items.

storage.weapons() - Returns all stored weapons.

storage.armors() - Returns all stored armors.

storage.allItems() - Returns everything that is stored.

storage.isEmpty() - Returns either true or false.

storage.addItem(item, amount) - Adds an item to a storage system. Use
$dataItems[id], $dataWeapons[id], $dataArmors[id].

storage.removeItem(item, amount) - Removes an item from the storage system.
If no amount is specified, all items will be removed.

storage.clear() - Clears a storage system.

storage.changeMaxCapacity(number) - Changes the max capacity to the given
number.

============================================================================
 ■ 使用条款
============================================================================
这项工作是在 MIT 许可下获得许可的。

更多信息在这里：https://github.com/waynee95/mv-plugins/blob/master/LICENSE

============================================================================
 ■ 联系信息
============================================================================
Forum Link: https://forums.rpgmakerweb.com/index.php?members/waynee95.88436/
Website: http://waynee95.me/
Discord Name: waynee95#4261
Ko-fi: https://ko-fi.com/waynee95
*/
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (typeof WAY === "undefined") {
  console.error("You need to install WAY_Core!"); // eslint-disable-line no-console

  if (Utils.isNwjs() && Utils.isOptionValid("test")) {
    var gui = require("nw.gui"); // eslint-disable-line


    gui.Window.get().showDevTools();
  }

  SceneManager.stop();
} else {
  WAYModuleLoader.registerPlugin("WAY_StorageSystem", "2.5.2", "waynee95", {
    name: "WAY_Core",
    version: ">= 2.0.0"
  });
}

window.$gameStorageSystems = null;

(function ($) {
  var _WAY$Util = WAY.Util,
      getNotetag = _WAY$Util.getNotetag,
      toArray = _WAY$Util.toArray;
  var $dataStorage = $.parameters.config;

  if ($dataStorage === null) {
    console.warn("WAY_StorageSystem\nPlugin Parameters are not setup properly!");

    if (Utils.isNwjs() && Utils.isOptionValid("test")) {
      require("nw.gui").Window.get().showDevTools();
    }
  }

  WAY.EventEmitter.on("load-item-notetags", parseNotetags);
  WAY.EventEmitter.on("load-weapon-notetags", parseNotetags);
  WAY.EventEmitter.on("load-armor-notetags", parseNotetags);

  function parseNotetags(obj) {
    obj.cannotStore = getNotetag(obj.note, "Cannot Store", false);
    obj.onlyInStorage = getNotetag(obj.note, "Can Store Only In", [], toArray);
  } //==========================================================================
  // PluginManager
  //==========================================================================


  PluginManager.addCommand("StorageSystem", {
    open: function open() {
      var storageId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $gameStorageSystems._lastActive;
      $gameStorageSystems.open(storageId);
    },
    add: function add(storageId, item, amount) {
      $gameStorageSystems.storage(storageId).addItem(eval(item), parseInt(amount));
    },
    remove: function remove(storageId, item, amount) {
      $gameStorageSystems.storage(storageId).removeItem(eval(item), parseInt(amount));
    },
    clear: function clear(storageId) {
      $gameStorageSystems.storage(storageId).clear();
    },
    change: function change(storageId, maxCapacity) {
      $gameStorageSystems.storage(storageId).changeMaxCapacity(maxCapacity);
    }
  }); //==========================================================================
  // DataManager
  //==========================================================================

  var _DataManager_createGameObjects = DataManager.createGameObjects;

  DataManager.createGameObjects = function () {
    _DataManager_createGameObjects.call(this);

    $gameStorageSystems = new Game_StorageSystems();
  };

  var _DataManager_makeSaveContents = DataManager.makeSaveContents;

  DataManager.makeSaveContents = function () {
    var contents = _DataManager_makeSaveContents.call(this);

    contents.storageSystems = $gameStorageSystems;
    return contents;
  };

  var _DataManager_extractSaveContents = DataManager.extractSaveContents;

  DataManager.extractSaveContents = function (contents) {
    _DataManager_extractSaveContents.call(this, contents);

    $gameStorageSystems = contents.storageSystems;

    if ($gameStorageSystems === undefined) {
      $gameStorageSystems = new Game_StorageSystems();
    }
  };

  if (Imported.YEP_X_NewGamePlus) {
    var _DataManager_prepareNewGamePlusData = DataManager.prepareNewGamePlusData;

    DataManager.prepareNewGamePlusData = function () {
      _DataManager_prepareNewGamePlusData.call(this);

      this._ngpData.storageSystems = JsonEx.makeDeepCopy($gameStorageSystems);
    };

    var _DataManager_carryOverNewGamePlusData = DataManager.carryOverNewGamePlusData;

    DataManager.carryOverNewGamePlusData = function () {
      _DataManager_carryOverNewGamePlusData.call(this);

      $gameStorageSystems = this._ngpData.storageSystems;
    };
  } // Imported YEP_X_NewGamePlus
  //==========================================================================
  // Game_StorageSystems
  //==========================================================================


  Game_StorageSystems.prototype.initialize = function () {
    this._data = [];
    this._lastActive = 0;
  };

  Game_StorageSystems.prototype.storage = function (storageId) {
    if (_typeof($dataStorage[storageId]) !== "object") {
      return;
    }

    if ($dataStorage[storageId]) {
      if (!this._data[storageId]) {
        this._data[storageId] = new Game_StorageSystem(storageId);
      }

      return this._data[storageId];
    }

    return null;
  };

  Game_StorageSystems.prototype.current = function () {
    return this.storage(this._lastActive);
  };

  Game_StorageSystems.prototype.open = function (storageId) {
    if (typeof storageId !== "undefined") {
      this._lastActive = storageId;
    }

    if (!this.current()) {
      return;
    }

    SceneManager.push(Scene_Storage);
  }; //==========================================================================
  // Game_StorageSystem
  //==========================================================================


  Game_StorageSystem.prototype.initialize = function (storageId) {
    var storage = $dataStorage[storageId];
    this._storageId = parseInt(storageId);
    this._title = storage.titleText;
    this._allowedTypes = storage.allowedTypes;
    this._maxCapacity = storage.maxCapacity;
    this._stackSize = storage.stackSize !== "none" ? parseInt(storage.stackSize) : "none";
    this.clear();
  };

  Game_StorageSystem.prototype.data = function () {
    return $dataStorage[this._storageId];
  };

  Game_StorageSystem.prototype.title = function () {
    return this._title;
  };

  Game_StorageSystem.prototype.allowedTypes = function () {
    return this._allowedTypes;
  };

  Game_StorageSystem.prototype.maxCapacity = function () {
    return this._maxCapacity;
  };

  Game_StorageSystem.prototype.changeMaxCapacity = function (capacity) {
    this._maxCapacity = capacity;
  };

  Game_StorageSystem.prototype.capacity = function () {
    var sum = 0;

    if (this._stackSize === "none") {
      sum = this.allItems().map(function (item) {
        return this.numItems(item);
      }, this).reduce(function (total, current) {
        return total + current;
      }, 0);
    } else {
      sum = this.allItems().length;
    }

    return sum;
  };

  Game_StorageSystem.prototype.capacityRate = function () {
    return this.capacity() / this.maxCapacity();
  };

  Game_StorageSystem.prototype.items = function () {
    return Object.keys(this._items).map(function (id) {
      return $dataItems[id];
    });
  };

  Game_StorageSystem.prototype.weapons = function () {
    return Object.keys(this._weapons).map(function (id) {
      return $dataWeapons[id];
    });
  };

  Game_StorageSystem.prototype.armors = function () {
    return Object.keys(this._armors).map(function (id) {
      return $dataArmors[id];
    });
  };

  Game_StorageSystem.prototype.equipItems = function () {
    return this.weapons().concat(this.armors());
  };

  Game_StorageSystem.prototype.allItems = function () {
    return this.items().concat(this.equipItems());
  };

  Game_StorageSystem.prototype.isEmpty = function () {
    return this.allItems().length === 0;
  };

  Game_StorageSystem.prototype.addItem = function (item, amount) {
    if (!this.canStoreItem(item)) return;
    var container = this.itemContainer(item);

    if (container) {
      var oldNumber = this.numItems(item);

      if (amount > 0) {
        amount = Math.min(amount, this.maxItems(item));
      } else {
        amount = Math.max(amount, -this.numItems(item));
      }

      container[item.id] = oldNumber + amount;

      if (container[item.id] === 0) {
        delete container[item.id];
      }
    }
  };

  Game_StorageSystem.prototype.removeItem = function (item, amount) {
    if (arguments < 2) {
      this.addItem(item, -this.numItems(item));
    } else {
      this.addItem(item, -amount);
    }
  };

  Game_StorageSystem.prototype.clear = function () {
    this._items = {};
    this._weapons = {};
    this._armors = {};
  };

  Game_StorageSystem.prototype.isTypeAllowed = function (type) {
    return type && this._allowedTypes.contains(type.toLowerCase());
  };

  Game_StorageSystem.prototype.canStoreItem = function (item) {
    if (item && item.onlyInStorage.length > 0) {
      return item.onlyInStorage.contains(this._storageId);
    }

    return true;
  };

  Game_StorageSystem.prototype.numItems = function (item) {
    var container = this.itemContainer(item);
    return container ? container[item.id] || 0 : 0;
  };

  Game_StorageSystem.prototype.maxItems = function (item) {
    if (this._stackSize === "none") {
      return this.maxCapacity() - this.capacity();
    }

    return Math.max(parseInt(this._stackSize, 10) - this.numItems(item), 0);
  };

  Game_StorageSystem.prototype.itemContainer = function (item) {
    if (!item) {
      return null;
    } else if (DataManager.isItem(item)) {
      return this._items;
    } else if (DataManager.isWeapon(item)) {
      return this._weapons;
    } else if (DataManager.isArmor(item)) {
      return this._armors;
    }

    return null;
  };

  Game_StorageSystem.prototype.getItemCategory = function (item) {
    if (DataManager.isItem(item) && item.itypeId === 1) {
      return "Items";
    } else if (DataManager.isItem(item) && item.itypeId === 2) {
      return "KeyItems";
    } else if (DataManager.isWeapon(item)) {
      return "Weapons";
    } else if (DataManager.isArmor(item)) {
      return "Armors";
    }

    return false;
  }; //==========================================================================
  // Window_Base
  //==========================================================================


  if (!Window_Base.prototype.textWidthEx) {
    Window_Base.prototype.textWidthEx = function (text) {
      return this.drawTextEx(text, 0, this.contents.height);
    };
  } //==========================================================================
  // Window_StorageTitle
  //==========================================================================


  Window_StorageTitle.prototype = Object.create(Window_Base.prototype);
  Window_StorageTitle.prototype.constructor = Window_StorageTitle;

  Window_StorageTitle.prototype.initialize = function (x, y, w, h) {
    Window_Base.prototype.initialize.call(this, x, y, w, h);
    this._title = $gameStorageSystems.current().title();
    this.refresh();
  };

  Window_StorageTitle.prototype.refresh = function () {
    this.contents.clear();
    var text = this._title;
    var dw = this.contents.width + this.textPadding();
    var tw = this.textWidthEx(text);
    var dx = Math.floor(Math.max(0, dw - tw) / 2);
    this.drawTextEx(text, this.textPadding() + dx, 0);
  }; //==========================================================================
  // Window_StorageCommand
  //==========================================================================


  Window_StorageCommand.prototype = Object.create(Window_HorzCommand.prototype);
  Window_StorageCommand.prototype.constructor = Window_StorageCommand;

  Window_StorageCommand.prototype.initialize = function (x, y) {
    this.setup();
    Window_HorzCommand.prototype.initialize.call(this, x, y);
    this.select(0);
  };

  Window_StorageCommand.prototype.setup = function () {
    var data = $gameStorageSystems.current().data();
    this._storageMode = data.storageMode;
    this._lootAllButton = data.lootAllButton;
    data = data.command;
    this._align = data.align;
    this._rows = data.rows;
    this._cols = data.cols;
    this._width = eval(data.width);
    this._addText = data.addText;
    this._removeText = data.removeText;
  };

  Window_StorageCommand.prototype.itemAlign = function () {
    return this._align;
  };

  Window_StorageCommand.prototype.windowWidth = function () {
    return this._width;
  };

  Window_StorageCommand.prototype.numVisibleRows = function () {
    return this._rows;
  };

  Window_StorageCommand.prototype.maxCols = function () {
    return this._cols + this._lootAllButton;
  };

  Window_StorageCommand.prototype.makeCommandList = function () {
    if (this._storageMode === "Remove") {
      this.addCommand(this._removeText, "remove");
    } else if (this._storageMode === "Add") {
      this.addCommand(this._addText, "add");
    } else {
      this.addCommand(this._addText, "add");
      this.addCommand(this._removeText, "remove");
    }

    if (this._lootAllButton) {
      this.addCommand("取走全部", "loot_all", !$gameStorageSystems.current().isEmpty());
    }
  };

  Window_StorageCommand.prototype.lastOption = function () {
    return this._index;
  }; //==========================================================================
  // Window_StorageCategory
  //==========================================================================


  Window_StorageCategory.prototype = Object.create(Window_HorzCommand.prototype);
  Window_StorageCategory.prototype.constructor = Window_StorageCategory;

  Window_StorageCategory.prototype.initialize = function (x, y) {
    this.setup();
    Window_HorzCommand.prototype.initialize.call(this, x, y);
  };

  Window_StorageCategory.prototype.setup = function () {
    var data = $gameStorageSystems.current().data().category;
    this._align = data.align;
    this._rows = data.rows;
    this._cols = data.cols;
    this._width = eval(data.width);
  };

  Window_StorageCategory.prototype.itemAlign = function () {
    return this._align;
  };

  Window_StorageCategory.prototype.windowWidth = function () {
    return this._width;
  };

  Window_StorageCategory.prototype.numVisibleRows = function () {
    return this._rows;
  };

  Window_StorageCategory.prototype.maxCols = function () {
    return this._cols;
  };

  if (!Imported.YEP_X_ItemCategories) {
    Window_StorageCategory.prototype.makeCommandList = function () {
      var data = $gameStorageSystems.current().allowedTypes();
      var length = data.length;

      for (var i = 0; i < length; i++) {
        var category = data[i].trim();
        this.addItemCategory(category);
      }
    };

    Window_StorageCategory.prototype.addItemCategory = function (category) {
      if (category.match(/KeyItems/i)) {
        return this.addCommand(TextManager.keyItem, "keyItem");
      } else if (category.match(/Items/i)) {
        return this.addCommand(TextManager.item, "item");
      } else if (category.match(/Weapons/i)) {
        return this.addCommand(TextManager.weapon, "weapon");
      } else if (category.match(/Armors/i)) {
        return this.addCommand(TextManager.armor, "armor");
      }
    };
  } else {
    // Imported.YEP_X_ItemCategories
    Window_StorageCategory.prototype.makeCommandList = function () {
      var data = $gameStorageSystems.current().allowedTypes();
      var length = data.length;

      for (var i = 0; i < length; i++) {
        var category = data[i].trim();
        Window_ItemCategory.prototype.addItemCategory.call(this, category);
      }
    };
  } // Imported.YEP_X_ItemCategories


  Window_StorageCategory.prototype.update = function () {
    Window_HorzCommand.prototype.update.call(this);

    if (this.visible) {
      this._itemWindow.setCategory(this.currentSymbol());

      this._itemWindow.setExt(this.currentExt());
    }
  };

  Window_StorageCategory.prototype.setItemWindow = function (itemWindow) {
    this._itemWindow = itemWindow;
    this.update();
  }; //==========================================================================
  // Window_StorageItemList
  //==========================================================================


  Window_StorageItemList.prototype = Object.create(Window_ItemList.prototype);
  Window_StorageItemList.prototype.constructor = Window_StorageItemList;

  Window_StorageItemList.prototype.initialize = function (x, y, w, h) {
    this.setup();
    Window_ItemList.prototype.initialize.call(this, x, y, w, h);
    this._mode = "none";
    this._storage = $gameStorageSystems.current();
  };

  Window_StorageItemList.prototype.setup = function () {
    var data = $gameStorageSystems.current().data().item;
    this._cols = data.cols;
  };

  Window_StorageItemList.prototype.maxCols = function () {
    return this._cols;
  };

  Window_StorageItemList.prototype.setExt = function (ext) {
    if (this._ext !== ext) {
      this._ext = ext;
      this.refresh();
      this.resetScroll();
    }
  };

  Window_StorageItemList.prototype.setMode = function (mode) {
    if (this._mode !== mode) {
      this._mode = mode;
      this.refresh();
      this.resetScroll();
    }
  };

  Window_StorageItemList.prototype.refresh = function () {
    Window_ItemList.prototype.refresh.call(this);

    if (this._helpWindow) {
      this._helpWindow.setItem(this.item());

      this._helpWindow.refresh();
    }
  };

  Window_StorageItemList.prototype.mode = function () {
    return this._mode;
  };

  if (!Imported.YEP_X_ItemCategories) {
    Window_StorageItemList.prototype.includes = function (item) {
      if (!this._storage.canStoreItem(item)) {
        return false;
      }

      switch (this._category) {
        case "item":
          return DataManager.isItem(item) && item.itypeId === 1;

        case "weapon":
          return DataManager.isWeapon(item);

        case "armor":
          return DataManager.isArmor(item);

        case "keyItem":
          return DataManager.isItem(item) && item.itypeId === 2;

        case "AllItems":
          return this._storage.isTypeAllowed(this._storage.getItemCategory(item));

        default:
          return false;
      }
    };
  } else {
    // Imported.YEP_X_ItemCategories
    Window_StorageItemList.prototype.includes = function (item) {
      if (!item) return false;

      if (!this._storage.canStoreItem(item)) {
        return false;
      }

      if (this._category === "AllItems") return true;
      return Window_ItemList.prototype.includes.call(this, item);
    };
  } // Imported.YEP_X_ItemCategories


  Window_StorageItemList.prototype.makeItemList = function () {
    if (this._mode === "add") {
      this._data = $gameParty.allItems().filter(function (item) {
        return this.includes(item);
      }, this);
    } else if (this._mode === "remove") {
      this._data = this._storage.allItems().filter(function (item) {
        return this.includes(item);
      }, this);
    }

    if (this.includes(null)) {
      this._data.push(null);
    }
  };

  Window_StorageItemList.prototype.drawItemNumber = function (item, x, y, width) {
    this.drawText("x", x, y, width - this.textWidth("00"), "right");
    var itemNum = this._mode === "add" ? $gameParty.numItems(item) : this._storage.numItems(item);
    this.drawText(itemNum, x, y, width, "right");
  };

  Window_StorageItemList.prototype.isEnabled = function (item) {
    if (!item) {
      return false;
    }

    if (item.cannotStore) {
      return false;
    }

    if (this._mode === "add") {
      if (this._storage.numItems(item) > 0) {
        return this._storage.maxItems(item) > 0;
      }

      return this._storage.capacity() < this._storage.maxCapacity();
    } else {
      return $gameParty.maxItems(item) - $gameParty.numItems(item) > 0;
    }
  }; //==========================================================================
  // Window_StorageInfo
  //==========================================================================


  Window_StorageInfo.prototype = Object.create(Window_Base.prototype);
  Window_StorageInfo.prototype.constructor = Window_StorageInfo;

  Window_StorageInfo.prototype.initialize = function (x, y, w, h) {
    Window_Base.prototype.initialize.call(this, x, y, w, h);
    this._storage = $gameStorageSystems.current();
    this._text = this._storage.data().infoText;
    this.refresh();
  };

  Window_StorageInfo.prototype.text = function () {
    return this._text.replace("%1", this._storage.capacity() + "/" + this._storage.maxCapacity());
  };

  Window_StorageInfo.prototype.refresh = function () {
    this.contents.clear();
    this.drawTextEx(this.text(), this.textPadding(), 0);
  }; //==========================================================================
  // Window_StorageNumber
  //==========================================================================


  Window_StorageNumber.prototype = Object.create(Window_ShopNumber.prototype);
  Window_StorageNumber.prototype.constructor = Window_StorageNumber;

  Window_StorageNumber.prototype.initialize = function (x, y, w, h) {
    Window_Selectable.prototype.initialize.call(this, x, y, w, h);
    this._storage = $gameStorageSystems.current();
    this._item = null;
    this._max = 1;
    this._number = 1;
    this.createButtons();
  };

  Window_StorageNumber.prototype.setup = function (item, mode) {
    this._item = item;
    this._number = 1;

    if (mode === "add") {
      this._max = $gameParty.numItems(item);

      if (this._max > this._storage.maxItems(item)) {
        this._max = this._storage.maxItems(item);
      }
    } else {
      this._max = this._storage.numItems(item);

      if (this._max + $gameParty.numItems(item) > $gameParty.maxItems(item)) {
        this._max = $gameParty.maxItems(item) - $gameParty.numItems(item);
      }
    }

    if (this._max < 0) {
      this._max = 0;
    }

    this.placeButtons();
    this.updateButtonsVisiblity();
    this.refresh();
  };

  Window_StorageNumber.prototype.refresh = function () {
    this.contents.clear();
    this.drawItemName(this._item, 0, this.itemY());
    this.drawNumber();
    this.drawMax();
  };

  Window_StorageNumber.prototype.drawNumber = function () {
    var x = this.cursorX();
    var y = this.itemY();
    var width = this.cursorWidth() - this.textPadding();
    this.resetTextColor();
    this.drawText(this._number, x, y, width, "right");
  };

  Window_StorageNumber.prototype.drawMax = function () {
    var width = this.contentsWidth() - this.textPadding();
    this.resetTextColor();
    this.drawText(this._max, 0, this.priceY(), width, "right");
  }; //==========================================================================
  // Scene_Storage
  //==========================================================================


  Scene_Storage.prototype = Object.create(Scene_MenuBase.prototype);
  Scene_Storage.prototype.constructor = Scene_Storage;

  Scene_Storage.prototype.initialize = function () {
    this.setup();
    Scene_MenuBase.prototype.initialize.call(this);
    this._storage = $gameStorageSystems.current();
  };

  Scene_Storage.prototype.setup = function () {
    var data = $gameStorageSystems.current().data();
    this._background = data.background;
    this._blurredBackground = data.blurredBackground;
    this._displayCategories = data.displayCategories;
    this._helpData = data.help;
    this._titleData = data.title;
    this._commandData = data.command;
    this._categoryData = data.category;
    this._infoData = data.info;
    this._itemData = data.item;
    this._numberData = data.number;
    this._lootAllButton = data.lootAllButton;
  };

  Scene_Storage.prototype.createBackground = function () {
    if (this._blurredBackground) {
      this._backgroundSprite = new Sprite();
      this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
      this.addChild(this._backgroundSprite);
    } else if (this._background !== "") {
      this._backgroundSprite = new Sprite();
      this._backgroundSprite.bitmap = ImageManager.loadPicture(this._background);
      this.addChild(this._backgroundSprite);
    }
  };

  Scene_Storage.prototype.create = function () {
    Scene_MenuBase.prototype.create.call(this);
    this.createHelpWindow();
    this.createTitleWindow();
    this.createCommandWindow();

    if (this._displayCategories) {
      this.createCategoryWindow();
    }

    this.createInfoWindow();
    this.createItemWindow();
    this.createNumberWindow();
  };

  Scene_Storage.prototype.createHelpWindow = function () {
    this._helpWindow = new Window_Help();
    this.addWindow(this._helpWindow);
    this._helpWindow.x = eval(this._helpData.x);
    this._helpWindow.y = eval(this._helpData.y);
    this._helpWindow.width = eval(this._helpData.width);
    this._helpWindow.height = eval(this._helpData.height);
  };

  Scene_Storage.prototype.createTitleWindow = function () {
    var wx = eval(this._titleData.x);
    var wy = eval(this._titleData.y);
    var ww = eval(this._titleData.width);
    var wh = eval(this._titleData.height);
    this._titleWindow = new Window_StorageTitle(wx, wy, ww, wh);
    this.addWindow(this._titleWindow);
  };

  Scene_Storage.prototype.createCommandWindow = function () {
    var wx = eval(this._commandData.x);
    var wy = eval(this._commandData.y);
    this._commandWindow = new Window_StorageCommand(wx, wy);

    if (this._displayCategories) {
      this._commandWindow.setHandler("add", this.onCommandOk.bind(this));

      this._commandWindow.setHandler("remove", this.onCommandOk.bind(this));
    } else {
      this._commandWindow.setHandler("add", this.onCategoryOk.bind(this));

      this._commandWindow.setHandler("remove", this.onCategoryOk.bind(this));
    }

    if (this._lootAllButton) {
      this._commandWindow.setHandler("loot_all", this.lootAll.bind(this));
    }

    this._commandWindow.setHandler("cancel", this.onCommandCancel.bind(this));

    this.addWindow(this._commandWindow);
  };

  Scene_Storage.prototype.createCategoryWindow = function () {
    var wx = eval(this._categoryData.x);
    var wy = eval(this._categoryData.y);
    this._categoryWindow = new Window_StorageCategory(wx, wy);

    this._categoryWindow.setHandler("ok", this.onCategoryOk.bind(this));

    this._categoryWindow.setHandler("cancel", this.onCategoryCancel.bind(this));

    this._categoryWindow.deactivate();

    this._categoryWindow.hide();

    this.addWindow(this._categoryWindow);
  };

  Scene_Storage.prototype.createInfoWindow = function () {
    var wx = eval(this._infoData.x);
    var wy = eval(this._infoData.y);
    var ww = eval(this._infoData.width);
    this._infoWindow = new Window_StorageInfo(wx, wy, ww, 80);
    this.addWindow(this._infoWindow);
  };

  Scene_Storage.prototype.createItemWindow = function () {
    var wx = eval(this._itemData.x);
    var wy = eval(this._itemData.y);
    var ww = eval(this._itemData.width);
    var wh = eval(this._itemData.height);
    this._itemWindow = new Window_StorageItemList(wx, wy, ww, wh);

    this._itemWindow.setHelpWindow(this._helpWindow);

    if (this._displayCategories) {
      this._categoryWindow.setItemWindow(this._itemWindow);
    }

    this._itemWindow.setHandler("ok", this.onItemOk.bind(this));

    this._itemWindow.setHandler("cancel", this.onItemCancel.bind(this));

    this.addWindow(this._itemWindow);
    this.showWholeStorage();
  };

  Scene_Storage.prototype.showWholeStorage = function () {
    this._itemWindow.setMode("remove");

    this._itemWindow.setCategory("AllItems");

    this._itemWindow.refresh();
  };

  Scene_Storage.prototype.createNumberWindow = function () {
    var wx = eval(this._numberData.x);
    var wy = eval(this._numberData.y);
    var ww = eval(this._numberData.width);
    var wh = eval(this._numberData.height);
    this._numberWindow = new Window_StorageNumber(wx, wy, ww, wh);

    this._numberWindow.setHandler("ok", this.onNumberOk.bind(this));

    this._numberWindow.setHandler("cancel", this.onNumberCancel.bind(this));

    this._numberWindow.hide();

    this.addWindow(this._numberWindow);
  };

  Scene_Storage.prototype.activateItemWindow = function () {
    this._infoWindow.refresh();

    this._itemWindow.refresh();

    this._itemWindow.activate();
  };

  Scene_Storage.prototype.item = function () {
    return this._itemWindow.item();
  };

  Scene_Storage.prototype.onCommandCancel = function () {
    SceneManager.pop();
  };

  Scene_Storage.prototype.onCommandOk = function () {
    this._itemWindow.setMode(this._commandWindow.currentSymbol());

    this._commandWindow.deactivate();

    this._commandWindow.hide();

    this._categoryWindow.activate();

    this._categoryWindow.select(0);

    this._categoryWindow.show();
  };

  Scene_Storage.prototype.onCategoryOk = function () {
    this._itemWindow.activate();

    this._itemWindow.selectLast();

    if (!this._displayCategories) {
      this._itemWindow.setMode(this._commandWindow.currentSymbol());

      this._itemWindow.setCategory("AllItems");

      this._itemWindow.refresh();
    }
  };

  Scene_Storage.prototype.onCategoryCancel = function () {
    this._categoryWindow.deselect();

    this._categoryWindow.deactivate();

    this._categoryWindow.hide();

    this._commandWindow.refresh();

    this._commandWindow.show();

    this._commandWindow.activate();

    this.showWholeStorage();
  };

  Scene_Storage.prototype.onItemOk = function () {
    this._item = this._itemWindow.item();

    this._itemWindow.deactivate();

    this._numberWindow.setup(this._item, this._itemWindow.mode());

    this._numberWindow.show();

    this._numberWindow.activate();
  };

  Scene_Storage.prototype.storeItem = function (amount) {
    this._storage.addItem(this.item(), amount);

    $gameParty.loseItem(this.item(), amount);
  };

  Scene_Storage.prototype.depositItem = function (amount) {
    this._storage.removeItem(this.item(), amount);

    $gameParty.gainItem(this.item(), amount);
  };

  Scene_Storage.prototype.lootAll = function () {
    var _this = this;

    this._storage.allItems().forEach(function (item) {
      var amount = _this._storage.numItems(item);

      if (amount > $gameParty.maxItems(item) - $gameParty.numItems(item)) {
        amount = $gameParty.maxItems(item) - $gameParty.numItems(item);
      }

      $gameParty.gainItem(item, amount);

      _this._storage.removeItem(item, amount);
    });

    this._itemWindow.refresh();

    this._infoWindow.refresh();

    this._commandWindow.refresh();

    this._commandWindow.activate();
  };

  Scene_Storage.prototype.onItemCancel = function () {
    this._itemWindow.deselect();

    this._commandWindow.refresh();

    this._helpWindow.clear();

    if (this._displayCategories) {
      this._categoryWindow.activate();
    } else {
      this._itemWindow.setCategory("none");

      this._commandWindow.activate();

      this.showWholeStorage();
    }
  };

  Scene_Storage.prototype.onNumberOk = function () {
    var okSound = this._numberData.okSound;

    if (okSound && okSound.name) {
      AudioManager.playSe(okSound);
    } else {
      SoundManager.playShop();
    }

    var mode = this._itemWindow.mode();

    if (mode === "add") {
      this.storeItem(this._numberWindow.number());
    } else if (mode === "remove") {
      this.depositItem(this._numberWindow.number());
    }

    this.endNumberInput();
  };

  Scene_Storage.prototype.endNumberInput = function () {
    this._numberWindow.hide();

    this._itemWindow.refresh();

    this._infoWindow.refresh();

    this._itemWindow.activate();
  };

  Scene_Storage.prototype.onNumberCancel = function () {
    SoundManager.playCancel();
    this.endNumberInput();
  };
})(WAYModuleLoader.getModule("WAY_StorageSystem")); //-----------------------------------------------------------------------------


function Window_StorageTitle() {
  this.initialize.apply(this, arguments);
}

function Window_StorageCommand() {
  this.initialize.apply(this, arguments);
}

function Window_StorageCategory() {
  this.initialize.apply(this, arguments);
}

function Window_StorageItemList() {
  this.initialize.apply(this, arguments);
}

function Window_StorageInfo() {
  this.initialize.apply(this, arguments);
}

function Window_StorageNumber() {
  this.initialize.apply(this, arguments);
}

function Scene_Storage() {
  this.initialize.apply(this, arguments);
}

function Game_StorageSystems() {
  this.initialize.apply(this, arguments);
}

function Game_StorageSystem() {
  this.initialize.apply(this, arguments);
} //-----------------------------------------------------------------------------

/*~struct~storage:
@param blurredBackground
@text 使用模糊透明背景
@type boolean
@default true

@param background
@text 菜单背景
@type file
@dir img/pictures
@default

@param titleText
@text 存储标题
@type text
@default \i[210]存储箱
@param infoText
@text 信息窗口文本
@type text
@default 容量: %1\i[208]

@param maxCapacity
@text 最大容量
@type number
@min 1
@max 9999
@default 20

@param stackSize
@text 项目
@type combo
@option none
@option 8
@option 16
@option 32
@option 64
@default none

@param displayCategories
@text 显示类别
@type boolean
@default false

@param allowedTypes
@text 允许的项目类型
@type text[]
@default ["items","armors","weapons","keyitems"]

@param storageMode
@text 存储模式
@type combo
@option "放入/取走"
@option "放入"
@option "取走"
@default "放入/取走"

@param lootAllButton
@text 显示所有战利品按钮
@type boolean
@default false

@param Scene Settings
@text 场景设置
@default Customize window parameters.

@param help
@text 帮助窗口设置
@type struct<help>
@default {"x":"0","y":"Graphics.boxHeight - this._helpWindow.height - 80","width":"Graphics.boxWidth","height":"108"}
@parent Scene Settings

@param title
@text 标题窗口设置
@type struct<title>
@default {"x":"0","y":"0","width":"Graphics.boxWidth","height":"72"}
@parent Scene Settings

@param command
@text 命令窗口设置
@type struct<command>
@default {"align":"center","x":"0","y":"72","width":"Graphics.boxWidth","rows":"1","cols":"2","addText":"Add","removeText":"Remove"}
@parent Scene Settings

@param category
@text 类别窗口设置
@type struct<category>
@default {"align":"center","x":"0","y":"72","width":"Graphics.boxWidth","rows":"1","cols":"4"}
@parent Scene Settings

@param item
@text 物品窗口设置
@type struct<item>
@default {"x":"0","y":"144","width":"Graphics.boxWidth","height":"Graphics.boxHeight - 224 - this._helpWindow.height","cols":"2"}
@parent Scene Settings

@param info
@text 信息窗口设置
@type struct<info>
@default {"x":"0","y":"Graphics.boxHeight - 80","width":"Graphics.boxWidth"}
@parent Scene Settings

@param number
@text 数字窗口设置
@type struct<number>
@default {"x":"Graphics.boxWidth / 2 - 250","y":"168","width":"500","height":"450"}
@parent Scene Settings
*/

/*~struct~help:
@param x
@text 帮助窗口 X
@type text
@default 0

@param y
@text 帮助窗口 Y
@type text
@default Graphics.boxHeight - this._helpWindow.height - 80

@param width
@text 帮助窗口宽
@type text
@default Graphics.boxWidth

@param height
@text 帮助窗口高
@type text
@default 108
*/

/*~struct~title:
@param x
@text 标题窗口 X
@type text
@default 0

@param y
@text 标题窗口 Y
@type text
@default 0

@param width
@text 标题窗口宽
@type text
@default Graphics.boxWidth

@param height
@text 标题窗口高
@type text
@default 72
*/

/*~struct~command:
@param align
@text 命令窗口对齐
@type select
@option left
@option center
@option right
@default center

@param x
@text 命令窗口 X
@type text
@default 0

@param y
@text 命令窗口 Y
@type text
@default 72

@param width
@text 命令窗口宽
@type text
@default Graphics.boxWidth

@param rows
@text 命令窗口 Rows
@type number
@min 1
@default 1

@param cols
@text 命令窗口 Cols
@type number
@min 1
@default 2

@param addText
@text 添加文本描述
@type text
@default 添加

@param removeText
@text 取走文本
@type text
@default 取走
*/

/*~struct~category:
@param align
@text 类别窗口对齐
@type select
@option left
@option center
@option right
@default center

@param x
@text 类别窗口 X
@type text
@default 0

@param y
@text 类别窗口 Y
@type text
@default 72

@param width
@text 类别窗口宽
@type text
@default Graphics.boxWidth

@param rows
@text 类别窗口 Rows
@type number
@min 1
@default 1

@param cols
@text 类别窗口 Cols
@type number
@min 1
@default 4
*/

/*~struct~item:
@param x
@text 物品窗口 X
@type text
@default 0

@param y
@text 物品窗口 Y
@type text
@default 144

@param width
@text 物品窗口宽
@type text
@default Graphics.boxWidth

@param height
@text 物品窗口高
@type text
@default Graphics.boxHeight - 224

@param cols
@text 物品窗口 Cols
@type number
@min 1
@default 2
*/

/*~struct~info:
@param x
@text 信息窗口 X
@type text
@default 0

@param y
@text 信息窗口 Y
@type text
@default Graphics.boxHeight - 80

@param width
@text 信息窗口宽
@type text
@default Graphics.boxWidth
*/

/*~struct~number:
@param x
@text 数字窗口 X
@type text
@default

@param y
@text 数字窗口 Y
@type text
@default

@param width
@text 数字窗口宽
@type text
@default

@param height
@text 数字窗口高
@type text
@default

@param okSound
@text 确定声效
@type struct<sound>
@default
*/

/*~struct~sound:
@param name
@text 音效名称
@type file
@dir audio/se
@default

@param volume
@text 音效音量
@type number
@default 90

@param pitch
@text 音效音调
@type number
@default 100

@param pan
@text 音效声像
@type number
@default 0
*/
//-----------------------------------------------------------------------------