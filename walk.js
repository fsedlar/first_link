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

				//Select any object that starts with $
				var pattern = /\$[\w\.]*/g

				var pattern_number
				var pattern_new
				var number_raw
				var number_hour
				var hourly = 40

				while (pattern_number = pattern.exec(v)) {
					console.log(pattern_number[0])

					pattern_new = pattern_number[0].toString().substring(1)
					console.log(pattern_new)

					number_raw = parseFloat(pattern_new)
					console.log(number_raw)

					number_hour = number_raw/hourly
					console.log(number_hour)
				}



				//var hour = parseFloat(pattern)

				//var wage = 40

				//var hourly = hour/wage

				//var cost = num.toString(hourly)

				// Have the $ amounts selected. Now need to convert 'pattern' into a number to divide by hourly salary

				v = v.replace(pattern, number_hour);

	textNode.nodeValue = v;
}
