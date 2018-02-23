//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)


walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:
		case 9:
		case 11:
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3:
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

  //var pattern = /\bTrump\b/g
    //var pattern = /[$]/g
    //var pattern = /^$/g
		  //var pattern = /\$[\s\S]*$/g  - This works
			//var pattern = /\$[\d\D]?$/g
			//var pattern = /\$([^]+).*$/g - This works V2
			//var pattern = /\$.*$/ - This works V3
			  //var pattern = /\$[\w]*/g - This works 2.0
				var pattern = /\$[\w\.]*/g

				// Have the $ amounts selected. Now need to convert 'pattern' into a number to divide by hourly salary

				var hour = Number(pattern.replace(/[^0-9\.-]+/g,""))

	//v = v.replace(pattern, "1000000000000");
	 v = v.replace(pattern, hour);

	//v = v.replace(/\bspaghetti\b/g, "caaaaarbs");

	textNode.nodeValue = v;
}
