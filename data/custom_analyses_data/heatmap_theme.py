import altair as alt

def heatmap_theme():
    # Typography
    font = "Helvetica Light"
    
    # Colors
    main_palette = ["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]
    sequential_palette = ["#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494"]

    # Axes
    axisColor = "#000000"
    gridColor = "#DEDDDD"
    
    return {
        "config": {
            "background": "transparent",
            "title": {
                "fontSize": 22,
                "fontWeight": 'normal',
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
                "labelFontSize": 12,
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
