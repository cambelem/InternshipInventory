<?php
/**
 * Class for handling UI for Location editing and creation
 * @author Micah Carter <mcarter at tux dot appstate dot edu>
**/

class Sysinventory_LocationUI {
    
    function showLocations() {
        // see if we need to do anything to the db
        # TODO: move this to index, write function in Location class to handle creating the new location
        if(isset($_REQUEST['newloc'])) {
            PHPWS_Core::initModClass('sysinventory','Sysinventory_Location.php');
            $loc = new Sysinventory_Location;
            $loc->description = $_REQUEST['description'];
            $loc->save();
        }else if (isset($_REQUEST['delloc'])) {
            PHPWS_Core::initModClass('sysinventory','Sysinventory_Location.php');
            $loc = new Sysinventory_Location;
            $loc->id = $_REQUEST['id'];
            $loc->delete();
        }

        // set up some stuff for the page template
        $tpl                     = array();
        $tpl['PAGE_TITLE']       = 'Edit Locations';
        $tpl['HOME_LINK']        = PHPWS_Text::moduleLink('Back to menu','sysinventory');

        // create the list of locations and stick it in the template array
        PHPWS_Core::initModClass('sysinventory','Sysinventory_Location.php');
        $locList = Sysinventory_Location::generateLocationList();
        $tpl['PAGER'] = $locList;

        // make the form for adding a new location
        $form = new PHPWS_Form('add_location');
        $form->addText('description');
        $form->setLabel('description','Description');
        $form->addSubmit('submit','Create Location');
        $form->setAction('index.php?module=sysinventory&action=edit_locations');
        $form->addHidden('newloc','add');

        $form->mergeTemplate($tpl);

        $template = PHPWS_Template::process($form->getTemplate(),'sysinventory','edit_location.tpl');

        Layout::addStyle('sysinventory','style.css');
        Layout::add($template);
    }
}

?>
