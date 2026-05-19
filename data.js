var APP_DATA = {
  "scenes": [
    {
      "id": "0-reception",
      "name": "RECEPTION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.154951100276289,
        "pitch": -0.01271200882715462,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": -0.860747526028641,
          "pitch": 0.07954179232345382,
          "rotation": 0,
          "target": "1-waiting-lounge"
        },
        {
          "yaw": 0.12703392088516097,
          "pitch": 0.1302604330665602,
          "rotation": 0,
          "target": "3-marketing-room-view-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8899303059855042,
          "pitch": 0.1506088666441503,
          "title": "ENTRY",
          "text": "DOOR"
        }
      ]
    },
    {
      "id": "1-waiting-lounge",
      "name": "WAITING LOUNGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -3.1272758557609386,
        "pitch": -0.005902088314240217,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": 0.025318112218641886,
          "pitch": 0.07094137422671132,
          "rotation": 0,
          "target": "0-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-camera-store-room",
      "name": "CAMERA STORE ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.167159932021793
      },
      "linkHotspots": [
        {
          "yaw": -2.866364517820397,
          "pitch": 0.18226381246257972,
          "rotation": 0,
          "target": "3-marketing-room-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-marketing-room-view-1",
      "name": "MARKETING ROOM VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.101020967725229
      },
      "linkHotspots": [
        {
          "yaw": 0.7387899268231273,
          "pitch": 0.08390639624504814,
          "rotation": 0,
          "target": "4-marketing-room-view-2"
        },
        {
          "yaw": 1.3299247492187583,
          "pitch": 0.09101192321031171,
          "rotation": 0,
          "target": "2-camera-store-room"
        },
        {
          "yaw": -0.5303680603029814,
          "pitch": 0.05153624768771081,
          "rotation": 0,
          "target": "6-marketing-room-view-4"
        },
        {
          "yaw": 0.07888345307132383,
          "pitch": 0.047598487014983704,
          "rotation": 0,
          "target": "5-marketing-room-view-3"
        },
        {
          "yaw": 1.539350656455757,
          "pitch": 0.10201581907746693,
          "rotation": 1.5707963267948966,
          "target": "0-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-marketing-room-view-2",
      "name": "MARKETING ROOM VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.103270975063486
      },
      "linkHotspots": [
        {
          "yaw": -1.7930632329012255,
          "pitch": 0.10044255151850834,
          "rotation": 0,
          "target": "3-marketing-room-view-1"
        },
        {
          "yaw": 0.42159112986175984,
          "pitch": 0.01239406543850663,
          "rotation": 0,
          "target": "5-marketing-room-view-3"
        },
        {
          "yaw": -0.32349209517743027,
          "pitch": 0.025598994267184594,
          "rotation": 0,
          "target": "6-marketing-room-view-4"
        },
        {
          "yaw": -2.6340168851427563,
          "pitch": 0.062382917753392775,
          "rotation": 0,
          "target": "0-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-marketing-room-view-3",
      "name": "MARKETING ROOM VIEW 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.13175056713159528,
        "pitch": -0.013112357532762076,
        "fov": 0.9797317989301564
      },
      "linkHotspots": [
        {
          "yaw": -0.6826449792082876,
          "pitch": 0.02929522266581941,
          "rotation": 0,
          "target": "4-marketing-room-view-2"
        },
        {
          "yaw": -0.03618714388834121,
          "pitch": 0.018228577989802375,
          "rotation": 0,
          "target": "3-marketing-room-view-1"
        },
        {
          "yaw": 1.213963537758401,
          "pitch": 0.06992668745630226,
          "rotation": 0,
          "target": "6-marketing-room-view-4"
        },
        {
          "yaw": -0.48874312557276234,
          "pitch": 0.029323105198354682,
          "rotation": 0,
          "target": "0-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-marketing-room-view-4",
      "name": "MARKETING ROOM VIEW 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9925704938382853
      },
      "linkHotspots": [
        {
          "yaw": -1.0532651077256112,
          "pitch": 0.020384912162008106,
          "rotation": 0,
          "target": "5-marketing-room-view-3"
        },
        {
          "yaw": 0.016634802515962832,
          "pitch": 0.007672220405281038,
          "rotation": 0,
          "target": "4-marketing-room-view-2"
        },
        {
          "yaw": 0.782946804826878,
          "pitch": 0.014861840543160199,
          "rotation": 0,
          "target": "3-marketing-room-view-1"
        },
        {
          "yaw": 0.39831465536315847,
          "pitch": 0.0029849177322347487,
          "rotation": 0,
          "target": "0-reception"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CUTIS MARKETING ROOM",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
