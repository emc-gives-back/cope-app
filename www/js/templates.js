angular.module("givesBack").run(["$templateCache", function($templateCache) {$templateCache.put("app/templates/dash.html","<ion-view view-title=Dashboard><ion-nav-buttons side=right><a class=\"button settings-icon button-icon icon ion-ios-gear\" ng-click=dashboardCtrl.showMenu()></a></ion-nav-buttons><ion-content ng-class=colour class=padding><a ng-repeat=\"category in dashboardCtrl.categories\" href=#/categories/{{category.id}} class=\"cope-tile tile-3\"><h3>{{category.title}}</h3><img ng-src={{category.image}}></a></ion-content></ion-view>");
$templateCache.put("categories/templates/category.html","<ion-view view-title={{categoryCtrl.category.title}}><ion-nav-buttons side=right><a class=\"button settings-icon button-icon icon ion-ios-home\" ui-sref=dash ng-if=!locked></a> <a class=\"button settings-icon button-icon icon ion-ios-gear\" ng-click=categoryCtrl.showMenu()></a></ion-nav-buttons><ion-content ng-class=colour><a ng-repeat=\"howto in categoryCtrl.howtos\" href=#/howtos/{{howto.id}} class=\"cope-tile tile-4\"><h2>{{howto.title}}</h2><img ng-src={{howto.image}}></a></ion-content></ion-view>");
$templateCache.put("categories/templates/create-new-category.html","<ion-modal-view><ion-header-bar><h1 class=title>Create New Category</h1></ion-header-bar><ion-content><div class=list><label class=\"item item-input\"><label style=padding-right:10px;>Title:</label> <input type=text ng-model=category.title placeholder=Title></label> <label class=\"item item-input\"><label style=padding-right:10px;>Image:</label> <input type=file placeholder=Image id=image></label></div><button class=\"button button-block button-calm\" ng-click=createNewCategory(category)>Add Category</button> <button class=\"button button-block button-energized\" ng-click=cancelCreateCategory()>Cancel</button></ion-content></ion-modal-view>");
$templateCache.put("categories/templates/edit-categories.html","<ion-modal-view><ion-header-bar><h1 class=title>Edit Categories</h1></ion-header-bar><ion-content><ion-list show-delete=true><ion-item ng-repeat=\"category in categories\">{{category.title}}<ion-delete-button class=ion-minus-circled ng-click=removeCategory(category.id)></ion-delete-button></ion-item></ion-list><button class=\"button button-block button-calm\" ng-click=newCategory()>New Category</button> <button class=\"button button-block button-balanced\" ng-click=cancelEditCategories()>Done</button></ion-content></ion-modal-view>");
$templateCache.put("howtos/templates/howto.html","<ion-view view-title={{howToCtrl.howto.title}}><ion-nav-buttons side=right><a class=\"button settings-icon button-icon icon ion-ios-home\" ui-sref=dash ng-if=!locked></a> <a class=\"button settings-icon button-icon icon ion-ios-gear\" ng-click=howToCtrl.showMenu()></a></ion-nav-buttons><ion-content ng-class=colour><span ng-repeat=\"task in howToCtrl.howto.tasks\" onclick=\"this.querySelector(\'audio\').play()\"><div class=\"cope-tile tile-4\"><p class=task-title>{{task.taskName}}</p><div class=task-desc-box><p>{{task.taskDesc}}</p></div><br><img ng-src={{task.image}}><audio ng-if=task.audio preload><source ng-src={{task.audio}}></audio></div></span><div ng-if=howToCtrl.hasVideo class=tasks-video><iframe ng-if=howToCtrl.externalVideo width=420 height=315 ng-src={{howToCtrl.videoUrl}} frameborder=0 allowfullscreen></iframe><video ng-if=!howToCtrl.externalVideo width=420 height=315 controls ng-src={{howToCtrl.videoUrl}}></video></div></ion-content></ion-view>");
$templateCache.put("howtos/templates/task.html","<ion-view view-title=Task><ion-content ng-class=colour></ion-content></ion-view>");
$templateCache.put("settings/templates/addhowto.html","<ion-modal-view class=add-how-to><ion-header-bar><h1 class=title>{{!showTasksPage ? \'Add How To\' : \'Add Task\'}}</h1></ion-header-bar><ion-content><div class=list ng-hide=showTasksPage><p style=\"text-align: center\">A How to is a collection of tasks or steps that describe how to do something, it can be anything,ie. a how to brush your teeth, how to wash your hands etc.</p><label class=\"item item-input\"><label style=padding-right:10px;>Title:</label> <input type=text ng-model=howto.title placeholder=\"The title of your new how to\"></label> <label class=\"item item-input\"><label style=padding-right:10px;>Video Url:</label> <input type=text ng-model=howto.videoUrl placeholder=\"The video to embed for your new how to\"></label> <label class=\"item item-input\"><label style=padding-right:10px;>Cover Image:</label> <input type=file placeholder=Image id=howtoimage></label> <button class=\"button icon-right ion-chevron-right button-calm\" style=margin-top:20px ng-click=navigateForm()><b>Add Some Tasks</b></button></div><div class=tasks ng-show=showTasksPage><p style=\"text-align: center\">Add a task for your how to, tasks are the steps which form the how to <i>ie. a how to brush your teeth one task would be get your toothbrush</i></p><div class=list ng-show=\"tasks.length > 0\" ng-repeat=\"t in tasks\"><a class=\"item item-thumbnail-left\" href=#><img src=../img/brushteeth.jpg><h2>{{t.taskName}}</h2><p>{{t.taskDesc}}</p></a></div><label class=\"item item-input\"><label style=padding-right:10px;>Task Name:</label> <input type=text ng-model=task.taskname placeholder=\"Task Name\"></label> <label class=\"item item-input\"><label style=padding-right:10px;>Task Description:</label> <input type=text ng-model=task.taskdesc placeholder=\"Task Description\"></label> <label class=\"item item-input\"><label style=padding-right:10px;>Task Image:</label> <input type=file placeholder=Image id=taskimage></label> <a class=\"button icon-left ion-chevron-left button-clear button-dark\" ng-click=navigateForm() style=\"float: left; margin-top:20px;\">Back</a> <span style=\"float: right;\"><button class=\"button icon-right ion-plus-round button-calm\" ng-click=addTask(task) style=margin-top:20px>Add Task</button> <button class=\"button icon-right ion-checkmark-round button-balanced\" ng-click=addHowTo(howto) style=margin-top:20px>Finish</button></span></div></ion-content></ion-modal-view>");
$templateCache.put("settings/templates/colorPicker.html","<ion-modal-view class=colour-picker><ion-header-bar><h1 class=title>Pick your favourite colour</h1></ion-header-bar><ion-content><div class=colour ng-class=col ng-repeat=\"col in colours\" ng-click=setColour(col)>&nbsp;</div></ion-content></ion-modal-view>");
$templateCache.put("settings/templates/editPin.html","<ion-modal-view class=edit-pin-view><ion-header-bar><h1 class=title>Edit Mode</h1></ion-header-bar><ion-content><div name=editPinForm><p>Please enter your pin: <input type=text class=edit-pin-input name=editPinInput value required ng-model=editPinInput ng-trim=false> <span class=error ng-model=editPinError ng-show=editPinErrorMsg>Pin incorrect please try again!</span> <button type=button class=\"button edit-pin-submit-button\" name=editPinSubmit ng-click=editPinSubmit()>Submit</button></p></div></ion-content></ion-modal-view>");}]);