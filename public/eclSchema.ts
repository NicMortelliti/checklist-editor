// Template interface for
interface baseItem {
  id: string;
  mainText: string;
}

// Interface for indexes, conditional item paths and MSLI paths
interface baseItemWithChildren extends baseItem {
  childItemIds: string[];
}

interface index extends baseItemWithChildren {
  casMsgIds: string[];
}

// TODO: Is this the way we'll determine index vs subIndex?
interface subIndex extends index {}

interface checklistItem extends baseItem {
  responseText?: string;
  extensionText?: string;
  synopticLink?: string; // Link to synoptic name?
  sensed: {
    simVar: string; // Variable name in MSFS
    invert: boolean; // TODO: Figure out what this is for
    unit: string; // TODO: Figure out what this is for
    value: string | number | boolean; // TODO: Figure out what types we need
  };
}

interface conditionalItem extends baseItem {
  paths: {
    path1: baseItemWithChildren;
    path2: baseItemWithChildren;
  };
}

// Paths 3, 4, 5 are optional
interface multiSelectLineItem extends baseItem {
  paths: {
    path1: baseItemWithChildren;
    path2: baseItemWithChildren;
    path3?: baseItemWithChildren;
    path4?: baseItemWithChildren;
    path5?: baseItemWithChildren;
  };
}
