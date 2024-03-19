import altair as alt

def heatmap_theme():
    # Typography
    font = "Helvetica Light"
    #labelFont = "Helvetica Light"
    
    # Colors
    main_palette = ["#1f4e79", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]
    sequential_palette = ["#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494"]

    # Axes
    axisColor = "#000000"
    gridColor = "#DEDDDD"
    
    return {
        #"width": 400,
        #"height": 400,
        "config": {
            "background": "transparent",
            "title": {
                "fontSize": 20,
                "fontWeight": 'bold',
                "font": font,
                "anchor": "start",
                "color": "#000000",
                "orient": 'top',
                "offset": 5,
                "subtitleColor": 'gray',
                "subtitleFont": font,
                "subtitleFontWeight": 'normal',
                "subtitleFontSize": 18,
                "subtitlePadding": 2,
            },
            "axis": {
                #domain
                "domain": True,
                "domainColor": axisColor,
                "domainWidth": 1,
                #grid
                "grid": False,
                "gridColor": gridColor,
                "gridWidth": 0.5,
                #label
                "labelFont": font,
                "labelFontSize": 12,
                "labelFlush": False,
                "labelFontWeight": 'normal',
                "labelPadding": 2,
                #"labelAngle": 0,
                
                #ticks
                "tickColor": axisColor,
                "tickSize": 4,
                #"tickCount": 3,
                "tickWidth": 1,
                #title
                "titleFont": font,
                "titleAlign": 'center',
                "titleFontWeight": 'bold',
                "titleFontSize": 14,
                "titlePadding": 5,
            },
            "legend": {
                "labelFont": font,
                "labelFontSize": 14,
                "symbolSize": 100,
                "titleFont": font,
                "titleFontSize": 14,
                "titleFontWeight": 'bold',
                "padding": 5,
                "titleLimit": 200,
                "gradientLength": 100,
            },
            "range": {
                "category": main_palette,
                "diverging": sequential_palette,
            },
            "view": {
                "stroke": "transparent", # Remove the border around the visualization
            	"strokeWidth": 0,
            },
        	"text": {
            	"font": 'Helvetica Light',
            	"fontSize": 14,
        	}
        }
    }

# Register the custom theme under a chosen name
alt.themes.register('heatmap_theme', heatmap_theme)

# Enable the newly registered theme
alt.themes.enable('heatmap_theme')
